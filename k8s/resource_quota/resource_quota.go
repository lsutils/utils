package resource_quota

import (
	v1 "k8s.io/api/core/v1"
	_ "k8s.io/apimachinery/pkg/api/resource"
	"k8s.io/apimachinery/pkg/util/sets"
	quotav1 "k8s.io/apiserver/pkg/quota/v1"
)

func main() {
	_ = quotav1.Add
}

func GetPodLimit(pod *v1.Pod, resourceNames ...v1.ResourceName) v1.ResourceList {
	result := v1.ResourceList{}
	for _, container := range pod.Spec.Containers {
		result = quotav1.Add(result, container.Resources.Limits)
	}
	// take max_resource(sum_pod, any_init_container)
	for _, container := range pod.Spec.InitContainers {
		result = quotav1.Max(result, container.Resources.Limits)
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

// AddResourceList adds the resources in newList to list.
func AddResourceList(list, newList v1.ResourceList) {
	for name, quantity := range newList {
		if value, ok := list[name]; !ok {
			list[name] = quantity.DeepCopy()
		} else {
			value.Add(quantity)
			list[name] = value
		}
	}
}

// SubResourceList adds the resources in newList to list.
func SubResourceList(list, newList v1.ResourceList) {
	for name, quantity := range newList {
		if value, ok := list[name]; !ok {
			list[name] = quantity.DeepCopy()
		} else {
			value.Sub(quantity)
			if value.IsZero() {
				delete(list, name)
			} else {
				list[name] = value
			}
		}
	}
}
func ToSet(resourceNames []v1.ResourceName) sets.String {
	result := sets.NewString()
	for _, resourceName := range resourceNames {
		result.Insert(string(resourceName))
	}
	return result
}

// Mask returns a new resource list that only has the values with the specified names
func Mask(resources v1.ResourceList, names ...v1.ResourceName) v1.ResourceList {
	nameSet := ToSet(names)
	result := v1.ResourceList{}
	for key, value := range resources {
		if nameSet.Has(string(key)) {
			result[key] = value.DeepCopy()
		}
	}
	return result
}
