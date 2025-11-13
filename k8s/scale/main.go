package main

import (
	"context"
	"fmt"
	"net/http"

	"k8s.io/apiextensions-apiserver/pkg/client/clientset/clientset"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/runtime/serializer"
	"k8s.io/client-go/dynamic"
	clientgoscheme "k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/rest"
	scaleclient "k8s.io/client-go/scale"
	"k8s.io/client-go/tools/clientcmd"
	ctrl "sigs.k8s.io/controller-runtime"
)

type LoggingTransport struct {
	rt http.RoundTripper
}

func (l LoggingTransport) RoundTrip(request *http.Request) (*http.Response, error) {

	fmt.Println(request.URL)
	return l.rt.RoundTrip(request)

}

func main() {

	gk := schema.GroupKind{
		Group: "apps",
		Kind:  "Deployment",
	}
	cfg, err := clientcmd.BuildConfigFromFlags("", "/Users/acejilam/.kube/koord")
	cfg.WrapTransport = func(rt http.RoundTripper) http.RoundTripper {
		return &LoggingTransport{rt: rt}
	}
	fmt.Println(err)
	mgr, err := ctrl.NewManager(cfg, ctrl.Options{
		Scheme:                 clientgoscheme.Scheme,
		HealthProbeBindAddress: "0",
		LeaderElection:         false,
	})

	cfg.GroupVersion = &schema.GroupVersion{}
	fmt.Println(err)
	mapper := mgr.GetRESTMapper()
	mapping, err := mapper.RESTMapping(gk, "v1")
	fmt.Println(err)
	codecs := serializer.NewCodecFactory(mgr.GetScheme())
	cfg.NegotiatedSerializer = codecs.WithoutConversion()
	restClient, err := rest.RESTClientFor(mgr.GetConfig())
	fmt.Println(err)
	k8sClient, err := clientset.NewForConfig(mgr.GetConfig())
	fmt.Println(err)
	discoveryClient := k8sClient.Discovery()

	scaleKindResolver := scaleclient.NewDiscoveryScaleKindResolver(discoveryClient)
	scaleNamespacer := scaleclient.New(restClient, mapper, dynamic.LegacyAPIPathResolverFunc, scaleKindResolver)

	gr := mapping.Resource.GroupResource()
	scale, err := scaleNamespacer.Scales("kube-system").Get(context.TODO(), gr, "coredns", metav1.GetOptions{})
	fmt.Println(err)
	fmt.Println(scale)
}
