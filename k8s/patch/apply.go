package main

import (
	corev1 "k8s.io/api/core/v1"
	"sigs.k8s.io/controller-runtime/pkg/client"
)

func main() {
	var pclq corev1.Pod
	patch := client.MergeFrom(pclq.DeepCopy())
	// reset the updated replicas count to 0 so that the rolling update can start afresh.
	pclq.Status.Conditions = nil
	_ = patch
	//r.client.Status().Patch(ctx, pclq, patch)
}
