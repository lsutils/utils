package main

import (
	"context"
	"encoding/json"
	"fmt"

	applypatch "github.com/evanphx/json-patch"
	"github.com/lsutils/utils/k8s/helper"
	genpatch "gomodules.xyz/jsonpatch/v2"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/types"
	"k8s.io/client-go/kubernetes"
)

func xxxx() {
	frontCotainer := map[string]interface{}{
		"spec": map[string]interface{}{
			"template": map[string]interface{}{
				"spec": map[string]interface{}{
					"containers": []map[string]interface{}{
						{

							"name":  "redis",
							"image": "redis:5-alpine",
						},
					},
				},
			},
		},
	}
	config := helper.NewK8sConfig().K8sRestConfig()
	clientset, _ := kubernetes.NewForConfig(config)

	b, _ := json.Marshal(frontCotainer)

	_, _ = clientset.AppsV1().Deployments(metav1.NamespaceDefault).Patch(context.Background(), "", types.StrategicMergePatchType, b, metav1.PatchOptions{})

	_ = []JSONPatch{
		JSONPatch{
			Op:   "add",
			Path: "/spec/template/spec/containers/0",
			Value: map[string]interface{}{
				"name":  "redis",
				"image": "redis:5-alpine",
			},
		},
	}

	_, _ = clientset.AppsV1().Deployments(metav1.NamespaceDefault).Patch(context.Background(), "", types.JSONPatchType, b, metav1.PatchOptions{})
}

type JSONPatch struct {
	Op    string      `json:"op"`
	Path  string      `json:"path"`
	Value interface{} `json:"value"`
}

func JsonPatch() {
	p := corev1.Pod{
		Spec: corev1.PodSpec{
			Containers: []corev1.Container{
				corev1.Container{
					Name:  "t",
					Image: "centos:7",
				},
			},
		},
	}
	p2 := corev1.Pod{
		Spec: corev1.PodSpec{
			Containers: []corev1.Container{
				corev1.Container{
					Name:  "t",
					Image: "centos:7",
				},
				corev1.Container{
					Name:  "t2",
					Image: "centos:8",
				},
			},
		},
	}
	origin, _ := json.Marshal(p)
	end, _ := json.Marshal(p2)
	patchOperation, _ := genpatch.CreatePatch(origin, end)
	fmt.Println(patchOperation)
	patchBytes, _ := json.Marshal(patchOperation)
	patchObj, _ := applypatch.DecodePatch(patchBytes)
	bytes2, _ := patchObj.Apply(origin)
	fmt.Println(string(bytes2))
}
