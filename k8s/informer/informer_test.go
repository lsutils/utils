package main

import (
	"fmt"
	"testing"

	corev1 "k8s.io/api/core/v1"
	"k8s.io/client-go/tools/cache"
)

func Test_RestoreGVKForList(t *testing.T) {
	podObject := &corev1.Pod{}
	if err := RestoreGVKForList[*corev1.Pod]([]*corev1.Pod{podObject}); err != nil {
		panic(err)
	}
	fmt.Println(podObject.TypeMeta)
	fmt.Println(podObject)
}

type Pod struct {
	Name  string
	Value int
}

func NewPod(name string, v int) Pod {
	return Pod{Name: name, Value: v}
}

func PodKeyFunc(obj interface{}) (string, error) {
	return obj.(Pod).Name, nil
}
func TestCache(t *testing.T) {
	df := cache.NewDeltaFIFOWithOptions(cache.DeltaFIFOOptions{KeyFunction: PodKeyFunc})

	// ADD3个object 进入 fifo
	pod1 := NewPod("pod-1", 1)
	pod2 := NewPod("pod-2", 2)
	pod3 := NewPod("pod-3", 3)
	df.Add(pod1)
	df.Add(pod2)
	df.Add(pod3)
	// Update pod-1
	pod1.Value = 11
	df.Update(pod1)
	fmt.Println(df.ListKeys())

}
