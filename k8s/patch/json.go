package main

import (
	"context"
	"encoding/json"
	"fmt"

	applypatch "github.com/evanphx/json-patch"
	"github.com/lsutils/utils/k8s/helper"
	genpatch "gomodules.xyz/jsonpatch/v2"
	appsv1 "k8s.io/api/apps/v1"
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
	p := appsv1.DaemonSet{
		Spec: appsv1.DaemonSetSpec{
			Template: corev1.PodTemplateSpec{
				Spec: corev1.PodSpec{
					Containers: []corev1.Container{
						corev1.Container{
							Name:  "t",
							Image: "centos:7",
						},
					},
					Affinity: &corev1.Affinity{
						NodeAffinity: &corev1.NodeAffinity{
							RequiredDuringSchedulingIgnoredDuringExecution: &corev1.NodeSelector{},
						},
					},
				},
			},
		},
	}
	p2 := appsv1.DaemonSet{
		Spec: appsv1.DaemonSetSpec{
			Template: corev1.PodTemplateSpec{
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
					Affinity: &corev1.Affinity{
						NodeAffinity: &corev1.NodeAffinity{
							RequiredDuringSchedulingIgnoredDuringExecution: &corev1.NodeSelector{
								NodeSelectorTerms: []corev1.NodeSelectorTerm{
									corev1.NodeSelectorTerm{
										MatchExpressions: []corev1.NodeSelectorRequirement{
											corev1.NodeSelectorRequirement{
												Key:      "kubernetes.io/arch",
												Operator: corev1.NodeSelectorOpIn,
												Values:   []string{"amd64"},
											},
										},
									},
								},
							},
						},
					},
				},
			},
		},
	}

	origin, _ := json.Marshal(p)
	end, _ := json.Marshal(p2)
	patchOperation, _ := genpatch.CreatePatch(origin, end)
	fmt.Println(patchOperation)
	fmt.Println("\n\n\n\n\n a")
	patchBytes, _ := json.Marshal(patchOperation)
	patchObj, _ := applypatch.DecodePatch(patchBytes)
	bytes2, _ := patchObj.Apply(origin)
	fmt.Println(string(bytes2))
}
