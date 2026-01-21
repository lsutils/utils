package main

import (
	"context"
	"fmt"

	"github.com/lsutils/utils/k8s/helper"
	"k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes"
)

func main() {
	restConfig := helper.NewK8sConfig().K8sRestConfig()
	client, err := kubernetes.NewForConfig(restConfig)
	if err != nil {
		panic(err)
	}

	node, err := client.CoreV1().Nodes().Get(context.Background(), "koord-worker3", metav1.GetOptions{})
	fmt.Println(err)
	node.Labels["dc.com/node.role"] = "worker"
	node.Status.Capacity["nvidia.com/l40s"] = resource.MustParse("8")
	node.Status.Allocatable["nvidia.com/l40s"] = resource.MustParse("8")
	_, err = client.CoreV1().Nodes().UpdateStatus(context.Background(), node, metav1.UpdateOptions{})
	fmt.Println(err)
}
