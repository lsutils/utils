package owner

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime/schema"
)

func main() {
	obj := &v1.ConfigMap{}
	metav1.NewControllerRef(obj.GetObjectMeta(), schema.GroupVersionKind{Group: "", Version: "v1", Kind: "ConfigMap"})
	//metav1.NewControllerRef(obj.GetObjectMeta(), x.GetGroupVersionKind())
}
