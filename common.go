package utils

import (
	"strings"

	"k8s.io/apimachinery/pkg/api/equality"
	apimeta "k8s.io/apimachinery/pkg/api/meta"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/intstr"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/util/retry"
	"sigs.k8s.io/controller-runtime/pkg/controller/controllerutil"
	"sigs.k8s.io/controller-runtime/pkg/handler"
)

func common() {
	_ = rest.AddUserAgent
	_ = equality.Semantic.DeepEqual
	_ = unstructured.NestedFieldCopy
	_ = runtime.DefaultUnstructuredConverter.ToUnstructured
	_ = controllerutil.ContainsFinalizer
	_ = controllerutil.AddFinalizer
	_ = controllerutil.RemoveFinalizer
	_ = controllerutil.SetOwnerReference
	_ = controllerutil.SetControllerReference
	_ = handler.EnqueueRequestForOwner
	_ = retry.RetryOnConflict
	_ = schema.ParseGroupVersion
	_ = metav1.NewControllerRef
	_ = metav1.GetControllerOf
	_ = metav1.ParseToLabelSelector
	_ = labels.SelectorFromValidatedSet
	_ = metav1.LabelSelectorAsSelector
	_ = intstr.GetScaledValueFromIntOrPercent

}
func setOwnerRef(target, owner metav1.Object, ownerType *metav1.TypeMeta) bool {
	if hasOwnerRef(target, owner) {
		return false
	}
	ownerRefs := append(
		target.GetOwnerReferences(),
		metav1.OwnerReference{
			APIVersion: ownerType.APIVersion,
			Kind:       ownerType.Kind,
			Name:       owner.GetName(),
			UID:        owner.GetUID(),
		})
	target.SetOwnerReferences(ownerRefs)
	return true
}

// removeOwnerRef removes owner from the ownerRefs of target, if necessary. Returns true if target needs
// to be updated and false otherwise.
func removeOwnerRef(target, owner metav1.Object) bool {
	if !hasOwnerRef(target, owner) {
		return false
	}
	ownerUID := owner.GetUID()
	oldRefs := target.GetOwnerReferences()
	newRefs := make([]metav1.OwnerReference, len(oldRefs)-1)
	skip := 0
	for i := range oldRefs {
		if oldRefs[i].UID == ownerUID {
			skip = -1
		} else {
			newRefs[i+skip] = oldRefs[i]
		}
	}
	target.SetOwnerReferences(newRefs)
	return true
}

// hasOwnerRef returns true if target has an ownerRef to owner.
func hasOwnerRef(target, owner metav1.Object) bool {
	ownerUID := owner.GetUID()
	for _, ownerRef := range target.GetOwnerReferences() {
		if ownerRef.UID == ownerUID {
			return true
		}
	}
	return false
}
func FilterWithLabels(objs []runtime.Object, labelSel labels.Selector) ([]runtime.Object, error) {
	outItems := make([]runtime.Object, 0, len(objs))
	for _, obj := range objs {
		meta, err := apimeta.Accessor(obj)
		if err != nil {
			return nil, err
		}
		if labelSel != nil {
			lbls := labels.Set(meta.GetLabels())
			if !labelSel.Matches(lbls) {
				continue
			}
		}
		outItems = append(outItems, obj.DeepCopyObject())
	}
	return outItems, nil
}

// SplitMaybeSubscriptedPath checks whether the specified fieldPath is
// subscripted, and
//   - if yes, this function splits the fieldPath into path and subscript, and
//     returns (path, subscript, true).
//   - if no, this function returns (fieldPath, "", false).
//
// Example inputs and outputs:
//   - "metadata.annotations['myKey']" --> ("metadata.annotations", "myKey", true)
//   - "metadata.annotations['a[b]c']" --> ("metadata.annotations", "a[b]c", true)
//   - "metadata.labels[”]"           --> ("metadata.labels", "", true)
//   - "metadata.labels"               --> ("metadata.labels", "", false)
func SplitMaybeSubscriptedPath(fieldPath string) (string, string, bool) {
	if !strings.HasSuffix(fieldPath, "']") {
		return fieldPath, "", false
	}
	s := strings.TrimSuffix(fieldPath, "']")
	parts := strings.SplitN(s, "['", 2)
	if len(parts) < 2 {
		return fieldPath, "", false
	}
	if len(parts[0]) == 0 {
		return fieldPath, "", false
	}
	return parts[0], parts[1], true
}
