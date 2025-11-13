package main

import (
	"context"
	"flag"
	"fmt"
	"net/http"
	"sort"
	"strconv"
	"strings"

	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/util/json"
	"k8s.io/apimachinery/pkg/util/sets"
	quotav1 "k8s.io/apiserver/pkg/quota/v1"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/klog/v2"
)

type LoggingTransport struct {
	rt http.RoundTripper
}

func (l *LoggingTransport) RoundTrip(request *http.Request) (*http.Response, error) {
	klog.Infoln(request.URL.String(), request.Method)
	return l.rt.RoundTrip(request)
}

var resourcesName string
var kubeconfig string
var nodeContains string
var needResourcesName string
var needResourcesNameQuantity = make(map[string]resource.Quantity)

func parseNeedResources() {
	if needResourcesName != "" {
		err := json.Unmarshal([]byte(needResourcesName), &needResourcesNameQuantity)
		if err != nil {
			panic(err)
		}
	}
}

func main() {
	flag.StringVar(&kubeconfig, "kubeconfig", "/Users/acejilam/.kube/mas.config", "absolute path to the kubeconfig file")
	flag.StringVar(&nodeContains, "node", "", "node name sub string")
	flag.StringVar(&resourcesName, "resources", "", "resource name")
	flag.StringVar(&needResourcesName, "need-resources", `{"cpu":"104","ephemeral-storage":"32Gi","memory":"1600Gi","nvidia.com/gpu-h100-80gb-hbm3":"8","rdma/rdma_shared_device_a":"1","rdma/rdma_shared_device_b":"1"}`, "resource name")
	flag.Parse()
	parseNeedResources()
	ss := sets.NewString()
	if strings.TrimSpace(resourcesName) != "" {
		ss = sets.NewString(strings.Split(strings.TrimSpace(resourcesName), ",")...)
	}

	clientConfig, err := clientcmd.BuildConfigFromFlags("", kubeconfig)
	if err != nil {
		klog.Fatalf("Error building kubeconfig: %s", err.Error())
		return
	}
	clientConfig.WrapTransport = func(rt http.RoundTripper) http.RoundTripper {
		return &LoggingTransport{rt: rt}
	}

	client, err := kubernetes.NewForConfig(clientConfig)
	if err != nil {
		klog.Fatalf("Error building kubernetes clientset: %s", err.Error())
		return
	}
	nodes, err := client.CoreV1().Nodes().List(context.Background(), metav1.ListOptions{})
	if err != nil {
		klog.Fatalf("Error listing nodes: %s", err.Error())
		return
	}

	ns := map[string]corev1.Node{}
	nss := sets.NewString()

	for _, node := range nodes.Items {
		if nodeContains != "" {
			if !strings.Contains(node.Name, nodeContains) {
				continue
			}
		}
		tt := sets.NewString()
		for k, _ := range node.Status.Allocatable {
			tt.Insert(string(k))
		}
		if ss.Intersection(tt).Len() > 0 {
			ns[node.Name] = node
			nss.Insert(node.Name)
		} else {
			ns[node.Name] = node
			nss.Insert(node.Name)
		}
	}
	nps := map[string]corev1.ResourceList{}
	pods, err := client.CoreV1().Pods(metav1.NamespaceAll).List(context.Background(), metav1.ListOptions{
		FieldSelector: "status.phase!=Failed,status.phase!=Succeeded",
	})

	for _, pod := range pods.Items {
		if pod.Spec.NodeName == "" {
			continue
		}
		nps[pod.Spec.NodeName] = quotav1.Add(nps[pod.Spec.NodeName], GetPodRequest(&pod))
	}

	if err != nil {
		klog.Fatalf("Error listing pods: %s", err.Error())
		return
	}
	var data [][]string
	for _, nName := range nss.List() {
		node := ns[nName]
		nodeResCmpSet := map[string]resource.Quantity{}
		for rn, v := range node.Status.Allocatable {
			if v.IsZero() {
				continue
			}
			if rn == "pods" || strings.Contains(string(rn), "hugepages") {
				continue
			}
			used := nps[nName][rn]
			if ss.Len() != 0 && !ss.Has(string(rn)) {
				continue
			}
			switch rn {
			case corev1.ResourceCPU:
				data = append(data, []string{
					nName, findStatus(&node), string(rn),
					fmt.Sprintf("%dm", v.MilliValue()), fmt.Sprintf("%dm", used.MilliValue()),
					strconv.FormatFloat(float64(used.MilliValue()*100)/float64(v.MilliValue()), 'f', 2, 64) + "%",
				})
			case corev1.ResourceMemory, corev1.ResourceEphemeralStorage:
				data = append(data, []string{
					nName, findStatus(&node), string(rn), fmt.Sprintf("%dMi", v.MilliValue()/1024/1024/1024),
					fmt.Sprintf("%dMi", used.MilliValue()/1024/1024/1024),
					strconv.FormatFloat(float64(used.MilliValue()*100)/float64(v.MilliValue()), 'f', 2, 64) + "%",
				})
			default:
				p := ""
				if v.Value() == 0 {
					p = "0%"
				} else {
					p = strconv.FormatFloat(float64(used.Value()*100)/float64(v.Value()), 'f', 2, 64) + "%"
				}

				data = append(data, []string{
					nName, findStatus(&node), string(rn), v.String(), used.String(),
					p,
				})
			}

			quantity := needResourcesNameQuantity[string(rn)]
			if !quantity.IsZero() {
				x := v.DeepCopy()
				x.Sub(used)
				x.Sub(quantity)
				nodeResCmpSet[string(rn)] = x
			}
		}
		ok := true
		for _, v := range nodeResCmpSet {
			if v.MilliValue() < 0 {
				ok = false
			}
		}
		if ok {
			fmt.Printf(nName)
			for k, v := range nodeResCmpSet {
				fmt.Printf(" %s: %s", k, v.String())
			}
			fmt.Println()
		}
	}

	//table := tablewriter.NewWriter(os.Stdout)
	//table.SetHeader([]string{"NodeName", "Phase", "Resources", "Cap", "Used", "Percent"})
	//table.AppendBulk(data) // Add Bulk Data
	//table.Render()
	klog.Flush()

	_cap := corev1.ResourceList{}
	_used := corev1.ResourceList{}

	for _, row := range data {
		quantity, err := resource.ParseQuantity(row[3])
		if err != nil {
			klog.Fatalf("Error parsing quantity: %s", err.Error())
		}
		parseQuantity, err := resource.ParseQuantity(row[4])
		if err != nil {
			klog.Fatalf("Error parsing quantity: %s", err.Error())
		}
		_cap = quotav1.Add(_cap, corev1.ResourceList{
			corev1.ResourceName(row[2]): quantity,
		})
		_used = quotav1.Add(_used, corev1.ResourceList{
			corev1.ResourceName(row[2]): parseQuantity,
		})
	}
	data = [][]string{}

	var _ns []string
	for k, _ := range _cap {
		_ns = append(_ns, string(k))
	}

	sort.Slice(_ns, func(i, j int) bool {
		return _ns[i] < _ns[j]
	})

	for _, name := range _ns {
		rn := corev1.ResourceName(name)
		v := _cap[rn]
		used := _used[rn]
		switch rn {
		case corev1.ResourceCPU:
			data = append(data, []string{
				string(rn),
				fmt.Sprintf("%dm", v.MilliValue()), fmt.Sprintf("%dm", used.MilliValue()),
				strconv.FormatFloat(float64(used.MilliValue()*100)/float64(v.MilliValue()), 'f', 2, 64) + "%",
			})
		case corev1.ResourceMemory, corev1.ResourceEphemeralStorage:
			data = append(data, []string{
				string(rn), fmt.Sprintf("%dMi", v.MilliValue()/1024/1024/1024),
				fmt.Sprintf("%dMi", used.MilliValue()/1024/1024/1024),
				strconv.FormatFloat(float64(used.MilliValue()*100)/float64(v.MilliValue()), 'f', 2, 64) + "%",
			})
		default:
			p := ""
			if v.Value() == 0 {
				p = "0%"
			} else {
				p = strconv.FormatFloat(float64(used.Value()*100)/float64(v.Value()), 'f', 2, 64) + "%"
			}

			data = append(data, []string{
				string(rn), v.String(), used.String(),
				p,
			})
		}
	}
	//
	//table = tablewriter.NewWriter(os.Stdout)
	//table.SetHeader([]string{"Resources", "Cap", "Used", "Percent"})
	//table.AppendBulk(data) // Add Bulk Data
	//table.Render()

}

func findStatus(n *corev1.Node) string {
	for _, cond := range n.Status.Conditions {
		if cond.Type == corev1.NodeReady {
			return "Ready"
		}
	}
	return "NotReady"
}
func GetPodRequest(pod *corev1.Pod, resourceNames ...corev1.ResourceName) corev1.ResourceList {
	result := corev1.ResourceList{}
	for _, container := range pod.Spec.Containers {
		result = quotav1.Add(result, container.Resources.Requests)
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
