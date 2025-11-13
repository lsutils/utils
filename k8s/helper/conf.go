package helper

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"

	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/discovery"
	"k8s.io/client-go/dynamic"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/client-go/util/homedir"
	"sigs.k8s.io/controller-runtime/pkg/cluster"
)

func RestConfigInPod() *rest.Config {
	config, err := rest.InClusterConfig()
	if err != nil {
		log.Fatal(err)
	}
	return config
}

func clusterClient(config *rest.Config) {
	c, err := cluster.New(config)
	err = c.GetClient().Update(context.Background(), &v1.Service{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "xxxx",
			Namespace: "default",
		},
		Spec: v1.ServiceSpec{
			Type: v1.ServiceTypeClusterIP,
			Ports: []v1.ServicePort{
				v1.ServicePort{
					Name:     "xxx",
					Protocol: "TCP",
					Port:     12220,
				},
			},
		},
	})
	fmt.Println(err)
}

//c, _ := dynamic.NewForConfig(RestConfig())
//c, _ := kubernetes.NewForConfig(&rest.Config{
//Host: "http://124.70.204.12:8009",
//})

type K8sConfig struct {
}

func NewK8sConfig() *K8sConfig {
	return &K8sConfig{}
}

var config *rest.Config

type LoggingTransport struct {
	rt http.RoundTripper
}

func (l *LoggingTransport) RoundTrip(request *http.Request) (*http.Response, error) {
	fmt.Println(request.URL, request.Method)
	return l.rt.RoundTrip(request)
}

// 	cfg, err := clientcmd.NewDefaultClientConfigLoadingRules().Load()
//	if err != nil {
//		panic(err)
//	}
//	restConfig, err := clientcmd.NewDefaultClientConfig(*cfg, &clientcmd.ConfigOverrides{}).ClientConfig()

// K8sRestConfig 读取kubeconfig 配置文件
func (kc *K8sConfig) K8sRestConfig() *rest.Config {
	if config != nil {
		return config
	}
	if os.Getenv("release") == "1" { //自定义环境
		log.Println("run in cluster")
		return RestConfigInPod()
	}
	log.Println("run outside cluster")

	defaultConfig := os.Getenv("KUBECONFIG")
	if defaultConfig == "" {
		defaultConfig = filepath.Join(homedir.HomeDir(), ".kube", "config")
	}
	var kubeconfig *string
	if home := homedir.HomeDir(); home != "" {
		kubeconfig = flag.String("kubeconfig", defaultConfig, "(optional) absolute path to the kubeconfig file")
	} else {
		kubeconfig = flag.String("kubeconfig", "", "absolute path to the kubeconfig file")
	}

	flag.Parse()
	var err error
	config, err = clientcmd.BuildConfigFromFlags("", *kubeconfig)
	//clusterClient(config)
	if err != nil {
		panic(err.Error())
	}
	config.WrapTransport = func(rt http.RoundTripper) http.RoundTripper {
		return &LoggingTransport{rt: rt}
	}
	return config

}

// InitClient 初始化 clientSet
func (kc *K8sConfig) InitClient() *kubernetes.Clientset {
	c, err := kubernetes.NewForConfig(kc.K8sRestConfig())

	if err != nil {
		log.Fatal(err)
	}

	return c
}

// InitDynamicClient 初始化 dynamicClient
func (kc *K8sConfig) InitDynamicClient() *dynamic.DynamicClient {
	c, err := dynamic.NewForConfig(kc.K8sRestConfig())

	if err != nil {
		log.Fatal(err)
	}

	return c
}

// InitDiscoveryClient 初始化 DiscoveryClient
func (kc *K8sConfig) InitDiscoveryClient() *discovery.DiscoveryClient {
	return discovery.NewDiscoveryClient(kc.InitClient().RESTClient())
}
