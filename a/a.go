package main

import (
	"context"
	"fmt"

	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/util/sets"
	quotav1 "k8s.io/apiserver/pkg/quota/v1"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/tools/clientcmd"
)

func main() {
	config, _ := clientcmd.BuildConfigFromFlags("", "/Users/acejilam/.kube/online-hd-01-k8s.config")

	c, _ := kubernetes.NewForConfig(config)

	var ns = sets.NewString()
	list, _ := c.CoreV1().Namespaces().List(context.Background(), metav1.ListOptions{})
	for _, n := range list.Items {
		if n.Labels["dc.com/sys.reserve"] == "true" {
			ns.Insert(n.Name)
		}
	}
	fmt.Println(ns)
	result := corev1.ResourceList{}
	podList, _ := c.CoreV1().Pods("").List(context.Background(), metav1.ListOptions{})
	for _, pod := range podList.Items {
		if pod.Spec.NodeName == "k8s-mas-gpu-8-85" {
			result = quotav1.Add(result, getPodRequests(&pod))
		}
	}
	cpu := result[corev1.ResourceCPU]
	fmt.Println(cpu.String())
}

func getPodRequests(pod *corev1.Pod, resourceNames ...corev1.ResourceName) corev1.ResourceList {
	result := corev1.ResourceList{}
	for _, container := range pod.Spec.Containers {
		result = quotav1.Add(result, container.Resources.Requests)
	}
	// take max_resource(sum_pod, any_init_container)
	for _, container := range pod.Spec.InitContainers {
		result = quotav1.Max(result, container.Resources.Requests)
	}
	// add pod overhead if it exists
	if pod.Spec.Overhead != nil {
		result = quotav1.Add(result, pod.Spec.Overhead)
	}
	if len(resourceNames) > 0 {
		result = quotav1.Mask(result, resourceNames)
	}
	return result
}
