package main

import (
	"fmt"

	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/client-go/dynamic"
	"k8s.io/client-go/dynamic/dynamicinformer"
	"k8s.io/client-go/tools/cache"
	"k8s.io/client-go/tools/clientcmd"
)

func main() {

	config, _ := clientcmd.BuildConfigFromFlags("", "/Users/acejilam/.kube/config")
	dynClient := dynamic.NewForConfigOrDie(config)
	dynInformerFactory := dynamicinformer.NewFilteredDynamicSharedInformerFactory(dynClient, 0, corev1.NamespaceAll, nil)
	gvk := "nodes.v1."
	gvr, _ := schema.ParseResourceArg(gvk)
	dynInformer := dynInformerFactory.ForResource(*gvr).Informer()
	dynInformer.AddEventHandler(cache.ResourceEventHandlerFuncs{
		AddFunc: func(obj interface{}) {
			fmt.Println(obj)
		},
	})

	a := make(chan struct{}, 1)
	dynInformerFactory.Start(a)
	select {}
}
