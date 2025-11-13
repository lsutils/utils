package proxy

import (
	"net"
	"net/http"
	"net/url"
	"strings"
	"time"

	"github.com/lsutils/utils/k8s/helper"
	utilnet "k8s.io/apimachinery/pkg/util/net"
	"k8s.io/apimachinery/pkg/util/proxy"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/transport"
	"k8s.io/klog/v2"
)

type responder struct{}

func (r *responder) Error(w http.ResponseWriter, req *http.Request, err error) {
	klog.Errorf("Error while proxying request: %v", err)
	http.Error(w, err.Error(), http.StatusInternalServerError)
}

//func main() {
//	mux := http.NewServeMux()
//	mux.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
//		handle(writer, request)
//	})
//	http.ListenAndServe(":8000", mux)
//}

func handle(w http.ResponseWriter, r *http.Request) {
	cfg := helper.NewK8sConfig().K8sRestConfig()
	host := cfg.Host
	if !strings.HasSuffix(host, "/") {
		host = host + "/"
	}
	target, err := url.Parse(host)
	_transport, _ := rest.TransportFor(cfg)

	upgradeTransport, err := makeUpgradeTransport(cfg)
	if err != nil {
	}

	responder := &responder{}
	_proxy := proxy.NewUpgradeAwareHandler(target, _transport, false, false, responder)
	_proxy.UpgradeTransport = upgradeTransport
	_proxy.UseRequestLocation = true

	handler := http.Handler(_proxy)
	handler.ServeHTTP(w, r)
}

// makeUpgradeTransport creates interview transport that explicitly bypasses HTTP2 support
// for proxy connections that must upgrade.
func makeUpgradeTransport(config *rest.Config) (proxy.UpgradeRequestRoundTripper, error) {
	dialer := net.Dialer{
		// Timeout:   30 * time.Second,
		KeepAlive: 120 * time.Second,
	}
	transportConfig, err := config.TransportConfig()
	if err != nil {
		return nil, err
	}
	tlsConfig, err := transport.TLSConfigFor(transportConfig)
	if err != nil {
		return nil, err
	}
	rt := utilnet.SetOldTransportDefaults(&http.Transport{
		TLSClientConfig: tlsConfig,
		DialContext:     dialer.DialContext,
	})
	upgrader, err := transport.HTTPWrappersForConfig(transportConfig, proxy.MirrorRequest)
	if err != nil {
		return nil, err
	}
	return proxy.NewUpgradeRequestRoundTripper(rt, upgrader), nil
}
