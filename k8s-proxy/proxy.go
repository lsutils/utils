package main

import (
	"bytes"
	"context"
	"crypto/tls"
	"crypto/x509"
	"errors"
	"fmt"
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"
	"strings"

	rbacv1 "k8s.io/api/rbac/v1"
	"k8s.io/apimachinery/pkg/runtime"
	utilerrors "k8s.io/apimachinery/pkg/util/errors"
	"k8s.io/apimachinery/pkg/util/sets"
	"k8s.io/apiserver/pkg/audit"
	"k8s.io/apiserver/pkg/authentication/authenticator"
	apiserverx509 "k8s.io/apiserver/pkg/authentication/request/x509"
	k8sx509 "k8s.io/apiserver/pkg/authentication/request/x509"
	"k8s.io/apiserver/pkg/authentication/user"
	"k8s.io/apiserver/pkg/authorization/authorizer"
	genericapifilters "k8s.io/apiserver/pkg/endpoints/filters"
	"k8s.io/apiserver/pkg/endpoints/handlers/responsewriters"
	"k8s.io/apiserver/pkg/endpoints/request"
	apirequest "k8s.io/apiserver/pkg/endpoints/request"
	"k8s.io/apiserver/pkg/server/dynamiccertificates"
	"k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/klog/v2"
	rbacv1helpers "k8s.io/kubernetes/pkg/apis/rbac/v1"
)

const (
	// Annotation key names set in advanced audit
	decisionAnnotationKey = "authorization.k8s.io/decision"
	reasonAnnotationKey   = "authorization.k8s.io/reason"

	// Annotation values set in advanced audit
	decisionAllow  = "allow"
	decisionForbid = "forbid"
	reasonError    = "internal error"

	XACKRequestCluster = "X-ACK-Request-Cluster"
)

const (
	ca         = "/tmp/test/ca.pem"
	proxyCert  = "/tmp/test/server-cert.pem"
	proxyKey   = "/tmp/test/server-key.pem"
	kubeconfig = "/tmp/kind-kubeconfig"
)

func main() {
	clientCAContent, err := dynamiccertificates.NewDynamicCAContentFromFile("client-ca-bundle", ca)
	if err != nil {
		panic(err)
	}
	caCert, err := os.ReadFile(ca)
	if err != nil {
		panic(err)
		return
	}

	caPool := x509.NewCertPool()
	caPool.AppendCertsFromPEM(caCert)
	rp := GetKubectlReverseProxy(context.Background())
	proxy := NewKubectlProxy(rp, clientCAContent)
	handler := proxy.HttpHandler()
	server := &http.Server{
		Addr:    fmt.Sprintf("127.0.0.1:13003"),
		Handler: handler,
		TLSConfig: &tls.Config{
			ClientCAs:  caPool,
			RootCAs:    caPool,
			ClientAuth: tls.RequireAndVerifyClientCert,
			MinVersion: tls.VersionTLS10,
		},
	}

	fmt.Println("Proxy server starting on https://127.0.0.1:13003")
	if err := server.ListenAndServeTLS(proxyCert, proxyKey); err != nil {
		panic(err)
	}
}

func GetKubectlReverseProxy(ctx context.Context) *httputil.ReverseProxy {
	cfg, err := clientcmd.BuildConfigFromFlags("", kubeconfig)
	if err != nil {
		panic(err)
	}

	caCert, err := os.ReadFile(ca)
	if err != nil {
		panic(err)
	}

	caPool := x509.NewCertPool()
	caPool.AppendCertsFromPEM(caCert)

	// 加载客户端证书（用于转发请求时向 Kind 集群认证）
	clientCert, err := tls.LoadX509KeyPair(proxyCert, proxyKey)
	if err != nil {
		panic(err)
	}

	// 创建自定义 Transport 来使用 Kind 的 CA 证书和客户端证书
	transport := &http.Transport{
		TLSClientConfig: &tls.Config{
			Certificates:       []tls.Certificate{clientCert},
			InsecureSkipVerify: true,
		},
	}

	director := func(req *http.Request) {

		miranaUrl := cfg.Host

		target, err := url.Parse(miranaUrl)
		if err != nil {
			panic(err)
		}

		req.URL.Scheme = target.Scheme
		req.URL.Host = target.Host
		req.URL.Path = singleJoiningSlash(target.Path, req.URL.Path)

	}

	modifyResp := func(resp *http.Response) error {
		return nil
	}

	errHandler := func(writer http.ResponseWriter, request *http.Request, err error) {
		http.Error(writer, fmt.Sprintf("Proxy error: %v", err), http.StatusBadGateway)
	}

	xxx := &httputil.ReverseProxy{
		Director:       director,
		ModifyResponse: modifyResp,
		ErrorHandler:   errHandler,
		Transport:      transport,
	}

	return xxx
}

func singleJoiningSlash(a, b string) string {
	aslash := strings.HasSuffix(a, "/")
	bslash := strings.HasPrefix(b, "/")
	switch {
	case aslash && bslash:
		return a + b[1:]
	case !aslash && !bslash:
		return a + "/" + b
	}
	return a + b
}

type KubectlProxy interface {
	HttpHandler() http.Handler
}

type defaultKubectlProxy struct {
	reverseProxy            *httputil.ReverseProxy
	ClientCAContentProvider dynamiccertificates.CAContentProvider
}

func NewKubectlProxy(
	reverseProxy *httputil.ReverseProxy,
	clientCAContentProvider dynamiccertificates.CAContentProvider,
) KubectlProxy {
	return &defaultKubectlProxy{
		reverseProxy:            reverseProxy,
		ClientCAContentProvider: clientCAContentProvider,
	}
}

func (p *defaultKubectlProxy) ReverseProxy() http.Handler {
	rp := p.reverseProxy
	return rp
}

func (p *defaultKubectlProxy) HttpHandler() http.Handler {
	apiPrefixes := sets.NewString(strings.Trim("/apis", "/"), strings.Trim("/api", "/")) // all possible API prefixes
	grouplessAPIPrefixes := sets.NewString(strings.Trim("/api", "/"))
	requestInfoResolver := &apirequest.RequestInfoFactory{
		APIPrefixes:          apiPrefixes,
		GrouplessAPIPrefixes: grouplessAPIPrefixes,
	}
	authz := &builtinGrantAuthorizer{}
	authn := k8sx509.NewDynamic(p.ClientCAContentProvider.VerifyOptions, ExtendCommonNameUserConversion)
	failedHandler := genericapifilters.Unauthorized(scheme.Codecs)

	handler := p.ReverseProxy()
	handler = p.WithAuthorization(handler, authz, scheme.Codecs)
	handler = genericapifilters.WithAuthentication(handler, authn, failedHandler, nil, nil)
	handler = genericapifilters.WithRequestInfo(handler, requestInfoResolver)

	return handler
}
func (p *defaultKubectlProxy) WithAuthorization(handler http.Handler, auth authorizer.Authorizer, s runtime.NegotiatedSerializer) http.Handler {
	return p.withAuthorization(handler, auth, s)
}

func (p *defaultKubectlProxy) withAuthorization(handler http.Handler, a authorizer.Authorizer, s runtime.NegotiatedSerializer) http.Handler {
	if a == nil {
		return handler
	}
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		ctx := req.Context()

		attributes, err := GetAuthorizerAttributes(ctx)
		if err != nil {
			responsewriters.InternalError(w, req, err)
			return
		}
		authorized, reason, err := a.Authorize(ctx, attributes)

		// an authorizer like RBAC could encounter evaluation errors and still allow the request, so authorizer decision is checked before error here.
		if authorized == authorizer.DecisionAllow {
			audit.AddAuditAnnotations(ctx,
				decisionAnnotationKey, decisionAllow,
				reasonAnnotationKey, reason)
			handler.ServeHTTP(w, req)
			return
		}
		if err != nil {
			audit.AddAuditAnnotation(ctx, reasonAnnotationKey, reasonError)
			responsewriters.InternalError(w, req, err)
			return
		}

		klog.Infof("Forbidden, URI %s, reason %s, attribute %v %v", req.RequestURI, reason, attributes.GetAPIGroup(), attributes.GetResource())
		audit.AddAuditAnnotations(ctx,
			decisionAnnotationKey, decisionForbid,
			reasonAnnotationKey, reason)
		responsewriters.Forbidden(attributes, w, req, reason, s)
	})
}

func GetAuthorizerAttributes(ctx context.Context) (authorizer.Attributes, error) {
	attribs := authorizer.AttributesRecord{}

	user, ok := request.UserFrom(ctx)
	if ok {
		attribs.User = user
	}

	requestInfo, found := request.RequestInfoFrom(ctx)
	if !found {
		return nil, errors.New("no RequestInfo found in the context")
	}

	// Start with common attributes that apply to resource and non-resource requests
	attribs.ResourceRequest = requestInfo.IsResourceRequest
	attribs.Path = requestInfo.Path
	attribs.Verb = requestInfo.Verb

	attribs.APIGroup = requestInfo.APIGroup
	attribs.APIVersion = requestInfo.APIVersion
	attribs.Resource = requestInfo.Resource
	attribs.Subresource = requestInfo.Subresource
	attribs.Namespace = requestInfo.Namespace
	attribs.Name = requestInfo.Name

	return &attribs, nil
}

var ExtendCommonNameUserConversion = apiserverx509.UserConversionFunc(func(chain []*x509.Certificate) (*authenticator.Response, bool, error) {
	if len(chain[0].Subject.CommonName) == 0 {
		return nil, false, nil
	}
	u := &user.DefaultInfo{
		Name:   chain[0].Subject.CommonName,
		Groups: chain[0].Subject.Organization,
		Extra:  make(map[string][]string),
	}
	if len(chain[0].Subject.OrganizationalUnit) > 0 {
		u.Extra[XACKRequestCluster] = chain[0].Subject.OrganizationalUnit
	}
	resp := &authenticator.Response{
		User: u,
	}

	return resp, true, nil
})

type builtinGrantAuthorizer struct {
}

type authorizingVisitor struct {
	requestAttributes authorizer.Attributes

	allowed bool
	reason  string
	errors  []error
}

func (v *authorizingVisitor) visit(source fmt.Stringer, rule *rbacv1.PolicyRule, err error) bool {
	if rule != nil && RuleAllows(v.requestAttributes, rule) {
		v.allowed = true
		v.reason = fmt.Sprintf("RBAC: allowed by %s", source.String())
		return false
	}
	if err != nil {
		v.errors = append(v.errors, err)
	}
	return true
}

func (b *builtinGrantAuthorizer) Authorize(ctx context.Context, requestAttributes authorizer.Attributes) (authorizer.Decision, string, error) {
	ruleCheckingVisitor := &authorizingVisitor{requestAttributes: requestAttributes}

	b.VisitRulesFor(ctx, requestAttributes.GetUser(), requestAttributes.GetNamespace(), ruleCheckingVisitor.visit)
	if ruleCheckingVisitor.allowed {
		return authorizer.DecisionAllow, ruleCheckingVisitor.reason, nil
	}

	// Build a detailed log of the denial.
	// Make the whole block conditional so we don't do a lot of string-building we won't use.
	var operation string
	if requestAttributes.IsResourceRequest() {
		b := &bytes.Buffer{}
		b.WriteString(`"`)
		b.WriteString(requestAttributes.GetVerb())
		b.WriteString(`" resource "`)
		b.WriteString(requestAttributes.GetResource())
		if len(requestAttributes.GetAPIGroup()) > 0 {
			b.WriteString(`.`)
			b.WriteString(requestAttributes.GetAPIGroup())
		}
		if len(requestAttributes.GetSubresource()) > 0 {
			b.WriteString(`/`)
			b.WriteString(requestAttributes.GetSubresource())
		}
		b.WriteString(`"`)
		if len(requestAttributes.GetName()) > 0 {
			b.WriteString(` named "`)
			b.WriteString(requestAttributes.GetName())
			b.WriteString(`"`)
		}
		operation = b.String()
	} else {
		operation = fmt.Sprintf("%q nonResourceURL %q", requestAttributes.GetVerb(), requestAttributes.GetPath())
	}

	var scope string
	if ns := requestAttributes.GetNamespace(); len(ns) > 0 {
		scope = fmt.Sprintf("in namespace %q", ns)
	} else {
		scope = "cluster-wide"
	}

	klog.Infof("RBAC: no rules authorize user %q with groups %q to %s %s", requestAttributes.GetUser().GetName(), requestAttributes.GetUser().GetGroups(), operation, scope)

	reason := ""
	if len(ruleCheckingVisitor.errors) > 0 {
		reason = fmt.Sprintf("RBAC: %v", utilerrors.NewAggregate(ruleCheckingVisitor.errors))
	}
	return authorizer.DecisionNoOpinion, reason, nil
}

type userDescriber struct {
	user user.Info
}

func (u userDescriber) String() string {
	return u.user.GetName()
}

func (b *builtinGrantAuthorizer) VisitRulesFor(ctx context.Context, user user.Info, namespace string, visitor func(source fmt.Stringer, rule *rbacv1.PolicyRule, err error) bool) {
	rules := []rbacv1.PolicyRule{
		{
			APIGroups:       []string{"*"},
			Resources:       []string{"*"},
			Verbs:           []string{"*"},
			ResourceNames:   []string{},
			NonResourceURLs: []string{"*"},
		},
	}
	sourceDescriber := &userDescriber{user: user}
	for i := range rules {
		if !visitor(sourceDescriber, &rules[i], nil) {
			return
		}
	}
}

func RuleAllows(requestAttributes authorizer.Attributes, rule *rbacv1.PolicyRule) bool {
	if requestAttributes.IsResourceRequest() {
		combinedResource := requestAttributes.GetResource()
		if len(requestAttributes.GetSubresource()) > 0 {
			combinedResource = requestAttributes.GetResource() + "/" + requestAttributes.GetSubresource()
		}

		return rbacv1helpers.VerbMatches(rule, requestAttributes.GetVerb()) &&
			rbacv1helpers.APIGroupMatches(rule, requestAttributes.GetAPIGroup()) &&
			rbacv1helpers.ResourceMatches(rule, combinedResource, requestAttributes.GetSubresource()) &&
			rbacv1helpers.ResourceNameMatches(rule, requestAttributes.GetName())
	}

	return rbacv1helpers.VerbMatches(rule, requestAttributes.GetVerb()) &&
		rbacv1helpers.NonResourceURLMatches(rule, requestAttributes.GetPath())
}
