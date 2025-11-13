package main

import (
	"context"
	"flag"
	"fmt"
	"os"
	"os/signal"
	"strings"
	"syscall"
	"time"

	"github.com/google/go-cmp/cmp"
	"github.com/lsutils/utils/k8s/helper"
	"k8s.io/apimachinery/pkg/api/meta"
	"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/wait"
	"k8s.io/client-go/dynamic"
	dynamicinformer "k8s.io/client-go/dynamic/dynamicinformer"
	"k8s.io/client-go/tools/cache"
)

func main() {
	var gvrStr string

	flag.StringVar(&gvrStr, "gvr", "", "GroupVersionResource like 'apps/v1/deployments'")
	config := helper.NewK8sConfig().K8sRestConfig()

	if gvrStr == "" {
		fmt.Println("Usage: --gvr group/version/resource, e.g. --gvr apps/v1/deployments")
		os.Exit(1)
	}

	// Parse GVR
	parts := strings.Split(gvrStr, "/")
	if len(parts) != 3 {
		fmt.Println("Invalid GVR format")
		os.Exit(1)
	}
	gvr := schema.GroupVersionResource{
		Group:    parts[0],
		Version:  parts[1],
		Resource: parts[2],
	}

	// Build client

	dynamicClient, err := dynamic.NewForConfig(config)
	if err != nil {
		panic(err)
	}

	informer := dynamicinformer.NewFilteredDynamicInformer(dynamicClient, gvr, "", 0, cache.Indexers{}, nil)

	// Cache for old objects
	gvrCache := make(map[string]*unstructured.Unstructured)

	// Setup context and signal handling
	//ctx, cancel := context.WithCancel(context.Background())
	//defer cancel()
	//go handleInterrupt(cancel)

	// Start watching
	fmt.Printf("Watching %s \n", gvrStr)

	informer.Informer().AddEventHandler(cache.ResourceEventHandlerFuncs{
		AddFunc: func(obj interface{}) {
			accessor, _ := meta.Accessor(obj)
			key := fmt.Sprintf("%s/%s", accessor.GetNamespace(), accessor.GetName())
			t := obj.(*unstructured.Unstructured)
			fmt.Printf("[ADDED] %s\n", key)
			switch m := t.Object["metadata"].(type) {
			case map[string]any:
				delete(m, "managedFields")
			}
			gvrCache[key] = t.DeepCopy()
		},
		UpdateFunc: func(old, new interface{}) {
			accessor, _ := meta.Accessor(new)
			key := fmt.Sprintf("%s/%s", accessor.GetNamespace(), accessor.GetName())
			t := new.(*unstructured.Unstructured)
			fmt.Printf("[MODIFIED] %s\n", key)
			switch m := t.Object["metadata"].(type) {
			case map[string]any:
				delete(m, "managedFields")
			}
			diff := cmp.Diff(gvrCache[key].Object, t.Object)
			if diff == "" {
				fmt.Println("No changes detected")
			} else {
				fmt.Println("Changes:")
				fmt.Println(diff)
			}

			gvrCache[key] = t.DeepCopy()
		},
		DeleteFunc: func(obj interface{}) {
			accessor, _ := meta.Accessor(obj)
			key := fmt.Sprintf("%s/%s", accessor.GetNamespace(), accessor.GetName())
			delete(gvrCache, key)
		},
	})
	informer.Informer().Run(wait.NeverStop)

}

func handleInterrupt(cancel context.CancelFunc) {
	c := make(chan os.Signal, 1)
	signal.Notify(c, syscall.SIGINT, syscall.SIGTERM)
	<-c
	fmt.Println("\nReceived interrupt. Exiting...")
	cancel()
	time.Sleep(time.Second)
}
