package main

import (
	"context"
	"flag"
	"fmt"
	"os"
	"sort"
	"strings"

	"github.com/lsutils/utils/k8s/helper"
	"github.com/olekukonko/tablewriter"
	"github.com/olekukonko/tablewriter/renderer"
	"github.com/olekukonko/tablewriter/tw"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/util/sets"
	quotav1 "k8s.io/apiserver/pkg/quota/v1"
	"k8s.io/client-go/kubernetes"
)

var resourcesNameFilters = sets.NewString()

func main() {
	resourcesName := ""
	flag.StringVar(&resourcesName, "resources", "", "统计资源")
	restConfig := helper.NewK8sConfig().K8sRestConfig()

	if strings.TrimSpace(resourcesName) != "" {
		resourcesNameFilters = sets.NewString(strings.Split(strings.TrimSpace(resourcesName), ",")...)
	}
	client, err := kubernetes.NewForConfig(restConfig)
	if err != nil {
		panic(err)
	}
	data := [][]any{
		{"NAME", "Capacity", "Allocatable", "Used", "Surplus"},
	}

	nodeList, _ := client.CoreV1().Nodes().List(context.Background(), metav1.ListOptions{})
	podList, _ := client.CoreV1().Pods("").List(context.Background(), metav1.ListOptions{})

	for _, node := range nodeList.Items {
		data = append(data, []any{
			node.Name,
			Marshal(node.Status.Capacity, node.Status.Capacity),
			Marshal(node.Status.Allocatable, node.Status.Allocatable),
			Used(node, podList),
			Surplus(node, podList),
		})
	}

	table := tablewriter.NewTable(os.Stdout,
		tablewriter.WithRenderer(renderer.NewBlueprint(tw.Rendition{
			Settings: tw.Settings{Separators: tw.Separators{BetweenRows: tw.On}},
		})),
		tablewriter.WithConfig(tablewriter.Config{
			Header: tw.CellConfig{Alignment: tw.CellAlignment{Global: tw.AlignCenter}},
			Row: tw.CellConfig{
				Alignment: tw.CellAlignment{Global: tw.AlignLeft},
			},
		}),
	)
	table.Header(data[0]...)
	table.Bulk(data[1:])
	table.Render()
}

func Used(node corev1.Node, list *corev1.PodList) string {
	used := corev1.ResourceList{}
	for _, pod := range list.Items {
		if pod.Spec.NodeName != node.Name {
			continue
		}

		if pod.Status.Phase == corev1.PodRunning || pod.Status.Phase == corev1.PodPending {
			used = quotav1.Add(used, getPodRequests(&pod))
		}
	}
	return Marshal(node.Status.Allocatable, used)
}

func Surplus(node corev1.Node, list *corev1.PodList) string {
	used := corev1.ResourceList{}
	for _, pod := range list.Items {
		if pod.Spec.NodeName != node.Name {
			continue
		}
		if pod.Status.Phase == corev1.PodRunning || pod.Status.Phase == corev1.PodPending {
			used = quotav1.Add(used, getPodRequests(&pod))
		}
	}
	return Marshal(node.Status.Allocatable, quotav1.Subtract(node.Status.Allocatable, used))
}

func Marshal(allocatable, obj corev1.ResourceList) string {
	delete(obj, "hugepages-1Gi")
	delete(obj, "hugepages-2Mi")
	delete(obj, "pods")
	delete(obj, "ephemeral-storage")
	var res []string
	var keys []string
	for k := range allocatable {
		keys = append(keys, string(k))
	}
	sort.Strings(keys)

	for _, name := range keys {
		if resourcesNameFilters.Len() > 0 && !resourcesNameFilters.Has(name) {
			continue
		}
		if v, ok := obj[corev1.ResourceName(name)]; ok {
			res = append(res, fmt.Sprintf("%s=%s", name, v.String()))
		} else {
			res = append(res, "")
		}
	}
	return strings.Join(res, "\n")
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
