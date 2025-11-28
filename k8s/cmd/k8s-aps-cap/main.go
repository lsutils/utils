package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/lsutils/utils/k8s/helper"
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/util/sets"
	quotav1 "k8s.io/apiserver/pkg/quota/v1"
	"k8s.io/client-go/kubernetes"
)

type Rule struct {
	CpuRatio     int                 `json:"cpuRatio"`
	MemoryRatio  int                 `json:"memoryRatio"`
	ResourceName corev1.ResourceName `json:"resourceName"`
}

var data = `[
  {
    "cpuRatio": 10,
    "memoryRatio": 100,
    "resourceName": "nvidia.com/gpu-l40s"
  },
  {
    "cpuRatio": 13,
    "memoryRatio": 200,
    "resourceName": "nvidia.com/gpu-h100-80gb-hbm3"
  },
  {
    "cpuRatio": 18,
    "memoryRatio": 200,
    "resourceName": "nvidia.com/gpu-h800"
  },
  {
    "cpuRatio": 18,
    "memoryRatio": 200,
    "resourceName": "nvidia.com/gpu-h100"
  },
  {
    "cpuRatio": 6,
    "memoryRatio": 80,
    "resourceName": "nvidia.com/mig-h100-80gb-hbm3-3g.40gb"
  }
]`

var (
	mapInfo                   = map[string]map[string]string{}
	CpuReserveLabelKey string = "dc.com/sys.reserve.cpus"
	MemReserveLabelKey string = "dc.com/sys.reserve.mem"
	rules              []Rule
)

type PreNode struct {
	Reserved      ResourceList
	GpuCap        ResourceList
	CpuCap        ResourceList
	GpuCapUsed    ResourceList
	CpuCapUsed    ResourceList
	GpuCapSurplus ResourceList
	CpuCapSurplus ResourceList
}

type ResourceList corev1.ResourceList

var _ json.Marshaler = ResourceList{}

func (r ResourceList) MarshalJSON() ([]byte, error) {
	x := (corev1.ResourceList)(r)
	ts := map[string]string{}
	for k, v := range x {
		ts[string(k)] = v.String()
	}
	return json.Marshal(ts)
}

func init() {
	err := json.Unmarshal([]byte(data), &rules)
	if err != nil {
		panic(err)
	}
}
func main() {
	var details = make(map[string]PreNode)

	restConfig := helper.NewK8sConfig().K8sRestConfig()
	client, err := kubernetes.NewForConfig(restConfig)
	if err != nil {
		panic(err)
	}
	resourcesSet := sets.NewString()
	nodeList, _ := client.CoreV1().Nodes().List(context.Background(), metav1.ListOptions{})
	for _, node := range nodeList.Items {
		details[node.Name] = PreNode{
			Reserved:      make(ResourceList),
			GpuCap:        make(ResourceList),
			CpuCap:        make(ResourceList),
			GpuCapUsed:    make(ResourceList),
			CpuCapUsed:    make(ResourceList),
			GpuCapSurplus: make(ResourceList),
			CpuCapSurplus: make(ResourceList),
		}

		cpuParseQuantity, err := resource.ParseQuantity(node.Labels[CpuReserveLabelKey])
		if err == nil {
			details[node.Name].Reserved[corev1.ResourceCPU] = cpuParseQuantity
		}

		memParseQuantity, err := resource.ParseQuantity(node.Labels[MemReserveLabelKey])
		if err == nil {
			details[node.Name].Reserved[corev1.ResourceMemory] = memParseQuantity
		}

		for k, _ := range node.Status.Capacity {
			if strings.Contains(string(k), "nvidia.com") {
				resourcesSet.Insert(string(k))
			}
		}

		for k, _ := range node.Status.Allocatable {
			if strings.Contains(string(k), "nvidia.com") {
				resourcesSet.Insert(string(k))
			}
		}

	}

	podList, _ := client.CoreV1().Pods("").List(context.Background(), metav1.ListOptions{})

	for _, node := range nodeList.Items {

		allocatable := quotav1.Subtract(node.Status.Allocatable, corev1.ResourceList(details[node.Name].Reserved))
		newAllocatable := corev1.ResourceList{}
		for k, v := range allocatable {
			if strings.Contains(string(k), "nvidia.com") {
				newAllocatable[k] = v
			}
			if k == corev1.ResourceCPU {
				newAllocatable[corev1.ResourceCPU] = v
			}
			if k == corev1.ResourceMemory {
				newAllocatable[corev1.ResourceMemory] = v
			}
		}
		allocatable = newAllocatable

		for _, rule := range rules {
			if _resource, ok := allocatable[rule.ResourceName]; ok {
				details[node.Name].GpuCap[rule.ResourceName] = _resource
				details[node.Name].GpuCap[corev1.ResourceCPU] = resource.MustParse(fmt.Sprintf("%d", rule.CpuRatio))
				details[node.Name].GpuCap[corev1.ResourceMemory] = resource.MustParse(fmt.Sprintf("%dG", rule.MemoryRatio))
			}
		}

		for k, v := range quotav1.Subtract(allocatable, corev1.ResourceList(details[node.Name].GpuCap)) {
			details[node.Name].CpuCap[k] = v.DeepCopy()
		}
		cpuInfos, gpuInfos := GetCurrentNodeResources(node.Name, podList)

		for k, _ := range allocatable {
			if strings.Contains(string(k), "nvidia.com") {
				details[node.Name].GpuCapUsed[k] = gpuInfos[k]
			} else {
				details[node.Name].CpuCapUsed[k] = cpuInfos[k]
				details[node.Name].GpuCapUsed[k] = gpuInfos[k]
			}
		}
		for k, v := range quotav1.Subtract(corev1.ResourceList(details[node.Name].CpuCap), corev1.ResourceList(details[node.Name].CpuCapUsed)) {
			details[node.Name].CpuCapSurplus[k] = v
		}

		for k, v := range quotav1.Subtract(corev1.ResourceList(details[node.Name].GpuCap), corev1.ResourceList(details[node.Name].GpuCapUsed)) {
			details[node.Name].GpuCapSurplus[k] = v
		}
	}

	for k, v := range details {
		marshal, _ := json.Marshal(v)
		fmt.Println(k, string(marshal))
	}
}

func GetCurrentNodeResources(node string, podList *corev1.PodList) (corev1.ResourceList, corev1.ResourceList) {
	cpu := corev1.ResourceList{}
	gpu := corev1.ResourceList{}
	for _, pod := range podList.Items {
		if pod.Spec.NodeName == node {
			if pod.Status.Phase == corev1.PodRunning || pod.Status.Phase == corev1.PodPending {

				x := getPodRequests(&pod)
				cpuUsed := resource.Quantity{}
				memoryUsed := resource.Quantity{}
				for _, rule := range rules {

					if v, ok := x[rule.ResourceName]; ok {
						var i int64 = 0
						for i = 0; i < v.Value(); i++ {
							cpuUsed.Add(resource.MustParse(fmt.Sprintf("%d", rule.CpuRatio)))
							memoryUsed.Add(resource.MustParse(fmt.Sprintf("%dG", rule.MemoryRatio)))
						}
						quantity := gpu[rule.ResourceName]
						quantity.Add(v)

					}
					delete(x, rule.ResourceName)
				}
				quantity := x[corev1.ResourceCPU]
				quantity.Sub(cpuUsed)
				quantity = x[corev1.ResourceMemory]
				quantity.Sub(memoryUsed)

				m := gpu[corev1.ResourceMemory]
				m.Add(memoryUsed)
				c := gpu[corev1.ResourceCPU]
				c.Add(cpuUsed)

			}
		}
	}

	return cpu, gpu
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

//  node      gpu cap     ,   cpu cap
//            a+more a|b|c|d        xxx
//
