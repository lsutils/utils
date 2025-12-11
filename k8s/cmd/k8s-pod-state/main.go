package main

import (
	"context"
	"flag"
	"fmt"
	"os"
	"sort"
	"strings"
	"time"

	"github.com/lsutils/utils/k8s/helper"
	"github.com/olekukonko/tablewriter"
	"github.com/olekukonko/tablewriter/renderer"
	"github.com/olekukonko/tablewriter/tw"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/util/duration"
	"k8s.io/apimachinery/pkg/util/sets"
	quotav1 "k8s.io/apiserver/pkg/quota/v1"
	"k8s.io/client-go/kubernetes"
)

var resourcesNameFilters = sets.NewString()
var resourcesName = ""

func main() {
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
		{"NAME", "NAMESPACE", "AGE", "NODE", "STATUS", "RESOURCE_LIMIT"},
	}
	podList, _ := client.CoreV1().Pods("").List(context.Background(), metav1.ListOptions{})
	for _, pod := range podList.Items {
		if pod.Spec.NodeName == "" {
			continue
		}
		if pod.Status.Phase == corev1.PodSucceeded || pod.Status.Phase == corev1.PodFailed {
			continue
		}
		rs := FormatResourceList(getPodRequests(&pod))
		if rs != "map[]" {
			data = append(data, []any{
				pod.Name,
				pod.Namespace,
				translateTimestampSince(pod.CreationTimestamp),
				pod.Spec.NodeName,
				pod.Status.Phase,
				rs,
			})
		}
	}

	table := tablewriter.NewTable(os.Stdout,
		tablewriter.WithRenderer(renderer.NewBlueprint(
			tw.Rendition{Symbols: tw.NewSymbols(tw.StyleNature)},
		)),
	)

	table.Header(data[0]...)
	table.Bulk(data[1:])
	table.Render()
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
func translateTimestampSince(timestamp metav1.Time) string {
	if timestamp.IsZero() {
		return "<unknown>"
	}
	return duration.HumanDuration(time.Since(timestamp.Time))
}
func FormatResourceList(rl corev1.ResourceList) string {
	delete(rl, "hugepages-1Gi")
	delete(rl, "hugepages-2Mi")
	delete(rl, "pods")
	delete(rl, "ephemeral-storage")
	var res []string

	for name, qty := range rl {
		if resourcesNameFilters.Len() > 0 && !resourcesNameFilters.Has(string(name)) {
			continue
		}
		res = append(res, fmt.Sprintf("%s:%s", name.String(), qty.String()))
	}
	sort.Strings(res)
	return "map[" + strings.Join(res, ", ") + "]"
}
