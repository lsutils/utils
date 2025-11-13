package main

import (
	"fmt"

	"k8s.io/apiextensions-apiserver/pkg/client/clientset/clientset"
	"k8s.io/client-go/tools/clientcmd"
	"sigs.k8s.io/controller-runtime/pkg/client/config"
)

func main() {

	config.GetConfig()
	getConfig, _ := clientcmd.BuildConfigFromFlags("", "/Users/acejilam/.kube/vm.config")

	client := clientset.NewForConfigOrDie(getConfig)
	discoveryClient := client.Discovery()
	resourceList, err := discoveryClient.ServerResourcesForGroupVersion("v1")
	fmt.Println(err)
	for _, resource := range resourceList.APIResources {
		fmt.Println(resource.Name, resource.Kind)
	}
}
