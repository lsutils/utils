package gvk

import (
	"bytes"
	"fmt"
	"io"
	"log"

	"github.com/lsutils/utils/k8s/helper"
	"k8s.io/apiextensions-apiserver/pkg/client/clientset/clientset"
	"k8s.io/apimachinery/pkg/api/meta"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/runtime/serializer"
	syaml "k8s.io/apimachinery/pkg/runtime/serializer/yaml"
	"k8s.io/apimachinery/pkg/util/yaml"
	"k8s.io/cli-runtime/pkg/genericclioptions"
	"k8s.io/client-go/discovery"
	"k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/restmapper"
	"k8s.io/client-go/tools/clientcmd"
	"sigs.k8s.io/controller-runtime/pkg/manager"
)

func gvr_2_gvk() {
	client, _ := genericclioptions.NewConfigFlags(false).ToDiscoveryClient()
	mapper := restmapper.NewDeferredDiscoveryRESTMapper(client)
	kindsFor, err := mapper.KindsFor(schema.GroupVersionResource{
		Group:    "",
		Version:  "v1",
		Resource: "pods",
	})
	fmt.Println(kindsFor, err)
}

func gvr_list() {
	config, err := clientcmd.BuildConfigFromFlags("", "~/.kube/koord")
	if err != nil {
		panic(err)
	}

	discoverClient, err := discovery.NewDiscoveryClientForConfig(config)
	if err != nil {
		panic(err)
	}

	_, apiResourceList, err := discoverClient.ServerGroupsAndResources()
	for _, v := range apiResourceList {
		gv, err := schema.ParseGroupVersion(v.GroupVersion)
		if err != nil {
			panic(err)
		}
		for _, resource := range v.APIResources {
			fmt.Println("name:", resource.Name, "    ", "group:", gv.Group, "    ", "version:", gv.Version)
		}
	}
}

// -----------------  Informer 获取的资源对象会丢失的 Kind 和 Version, 该如何解决?

// GVKForObject 传入k8s资源对象, 并且传入一个k8s的注册表
// 如果是自定义资源则需要用该资源的注册表, 一般都是由k8s codegen 自动生成;
func GVKForObject(obj runtime.Object, scheme *runtime.Scheme) (schema.GroupVersionKind, error) {
	_, isPartial := obj.(*metav1.PartialObjectMetadata) //nolint:ifshort
	_, isPartialList := obj.(*metav1.PartialObjectMetadataList)
	// 如果存在部分metadata 信息会尝试通过, runtime.Object 自带的接口去获取GVK
	// 我们都需要恢复大概率就肯定是因为我们没有 😄
	if isPartial || isPartialList {

		gvk := obj.GetObjectKind().GroupVersionKind()
		if len(gvk.Kind) == 0 {
			return schema.GroupVersionKind{}, runtime.NewMissingKindErr("unstructured object has no kind")
		}
		if len(gvk.Version) == 0 {
			return schema.GroupVersionKind{}, runtime.NewMissingVersionErr("unstructured object has no version")
		}
		return gvk, nil
	}
	// 我们会尝试从注册表中去解释 GVK 列表
	gvks, isUnversioned, err := scheme.ObjectKinds(obj)
	if err != nil {
		return schema.GroupVersionKind{}, err
	}
	if isUnversioned {
		return schema.GroupVersionKind{}, fmt.Errorf("cannot create group-version-kind for unversioned type %T", obj)
	}

	if len(gvks) < 1 {
		return schema.GroupVersionKind{}, fmt.Errorf("no group-version-kinds associated with type %T", obj)
	}
	if len(gvks) > 1 {
		return schema.GroupVersionKind{}, fmt.Errorf(
			"multiple group-version-kinds associated with type %T, refusing to guess at one", obj)
	}
	return gvks[0], nil
}

func x() {
	var mgr manager.Manager
	mapping, _ := mgr.GetRESTMapper().RESTMapping(schema.GroupKind{
		Group: "",
		Kind:  "Pod",
	}, "v1")
	gr := mapping.Resource.GroupResource()
	fmt.Println(gr)
}

// RestoreGVKForList 恢复资源对象列表,
func RestoreGVKForList[T runtime.Object](objects []T) error {
	if len(objects) != 0 {
		gvk, err := GVKForObject(objects[0], scheme.Scheme)
		if err != nil {
			return err
		}
		for _, obj := range objects {
			// 把获取到的 GVK 设置回 k8s 资源
			obj.GetObjectKind().SetGroupVersionKind(gvk)
		}
	}
	return nil
}

func main() {
	schema.ParseResourceArg("b.v1.interview")
	decoder := yaml.NewYAMLOrJSONDecoder(bytes.NewReader([]byte(`apiVersion: v1
kind: Pod
metadata:
  name: Title
  labels: 
    app: Title
spec:
  containers:
    - name: Title
      image: Image
      imagePullPolicy: IfNotPresent

  restartPolicy: Always
 

`)), 0)
	//config, err := rest.InClusterConfig()
	config := helper.NewK8sConfig().K8sRestConfig()
	client, err := clientset.NewForConfig(config)
	if err != nil {
		log.Fatal(err)
	}
	for {
		var rawObj runtime.RawExtension
		err := decoder.Decode(&rawObj)
		if err != nil {
			if err == io.EOF {
				break
			}
		}
		obj, gvk, err := syaml.NewDecodingSerializer(unstructured.UnstructuredJSONScheme).Decode(rawObj.Raw, nil, nil)
		if err != nil {
			log.Fatal(err)
		}
		toUnstructuredObj, err := runtime.DefaultUnstructuredConverter.ToUnstructured(obj)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(toUnstructuredObj)
		//获取 所有apic groupresource
		gr, err := restmapper.GetAPIGroupResources(client.Discovery())
		if err != nil {
			log.Fatal(err)
		}
		mapper := restmapper.NewDiscoveryRESTMapper(gr)
		mapping, err := mapper.RESTMapping(gvk.GroupKind(), gvk.Version)

		gvr := schema.GroupVersionResource{
			Group:    mapping.Resource.Group,
			Version:  mapping.Resource.Version,
			Resource: mapping.Resource.Resource,
		}
		fmt.Println(gvr)
	}
}

func UnstructuredToMeta(unstructuredObj *unstructured.Unstructured) (runtime.Object, error) {
	// 创建一个带有序列化器的运行时Scheme
	//scheme := runtime.NewScheme()
	codecs := serializer.NewCodecFactory(scheme.Scheme)
	serializer := codecs.UniversalDeserializer()

	// 将Unstructured对象转换为JSON字节数组
	jsonBytes, err := unstructuredObj.MarshalJSON()
	if err != nil {
		return nil, fmt.Errorf("failed to marshal Unstructured object to JSON: %v", err)
	}

	// 使用序列化器将JSON字节数组转换为metav1.Object对象
	metaObj, _, err := serializer.Decode(jsonBytes, nil, nil)
	if err != nil {
		return nil, fmt.Errorf("failed to decode JSON to metav1.Object: %v", err)
	}

	return metaObj, nil
}

var _ = meta.UnsafeGuessKindToResource
