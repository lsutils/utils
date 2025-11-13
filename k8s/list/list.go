package main

import (
	"context"
	"fmt"

	"github.com/lsutils/utils/k8s/gvk"
	"github.com/lsutils/utils/k8s/helper"
	appsv1 "k8s.io/api/apps/v1"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/restmapper"
	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/klog/v2"
)

type Slice struct {
	d map[string]string
}

func (s *Slice) Add(v string) {
	if s.d == nil {
		s.d = map[string]string{}
	}
	s.d[v] = ""
}
func (s *Slice) Strings() []string {
	var ks []string
	for item, _ := range s.d {
		ks = append(ks, item)
	}
	return ks
}

var Res = make(map[string]Slice, 0)

func main() {

	List[*corev1.Pod](&corev1.Pod{})
	List[*corev1.ConfigMap](&corev1.ConfigMap{})
	List[*appsv1.Deployment](&appsv1.Deployment{})
	List[*appsv1.StatefulSet](&appsv1.StatefulSet{})
	ListCrd(schema.GroupVersionResource{Group: "aps.datacanvas.com", Version: "v1", Resource: "containers"})
	ListCrd(schema.GroupVersionResource{Group: "aps.datacanvas.com", Version: "v1", Resource: "groups"})
	ListCrd(schema.GroupVersionResource{Group: "aps.datacanvas.com", Version: "v1", Resource: "projects"})
	ListCrd(schema.GroupVersionResource{Group: "aps.datacanvas.com", Version: "v1", Resource: "tenants"})
	ListCrd(schema.GroupVersionResource{Group: "machinelearning.seldon.io", Version: "v1", Resource: "seldondeployments"})
	res := make(map[string][]string, 0)
	for k, v := range Res {
		res[k] = v.Strings()
	}
	//marshal, _ := json.Marshal(res)
	//fmt.Println(string(marshal))
	//os.WriteFile("5311.json", marshal, os.ModePerm)
}

func List[T runtime.Object](t runtime.Object) []*T {
	var res []*T
	_gvk, _ := gvk.GVKForObject(t, scheme.Scheme)
	t.GetObjectKind().SetGroupVersionKind(_gvk)
	dyc := new(helper.K8sConfig).InitDynamicClient()
	dc := new(helper.K8sConfig).InitDiscoveryClient()
	gr, err := restmapper.GetAPIGroupResources(dc)
	if err != nil {
		klog.Fatal(err)
	}
	restMapper := restmapper.NewDiscoveryRESTMapper(gr)
	mapping, err := restMapper.RESTMapping(schema.GroupKind{
		Group: t.GetObjectKind().GroupVersionKind().Group,
		Kind:  t.GetObjectKind().GroupVersionKind().Kind,
	})
	if err != nil {
		klog.Fatal(err)
	}
	list, err := dyc.Resource(schema.GroupVersionResource{
		Group:    t.GetObjectKind().GroupVersionKind().Group,
		Version:  t.GetObjectKind().GroupVersionKind().Version,
		Resource: mapping.Resource.Resource,
	}).List(context.Background(), metav1.ListOptions{})
	if err != nil {
		klog.Fatal(err)
	}
	for _, item := range list.Items {
		var x = new(T)
		runtime.DefaultUnstructuredConverter.FromUnstructured(item.UnstructuredContent(), &x)
		res = append(res, x)
		for k, v := range item.GetLabels() {
			common(k, item)
			slice := Res[k]
			slice.Add(v)
			Res[k] = slice
		}
	}

	return res
}

func ListCrd(rs schema.GroupVersionResource) {
	dyc := new(helper.K8sConfig).InitDynamicClient()

	list, err := dyc.Resource(rs).List(context.Background(), metav1.ListOptions{})
	if err != nil {
		klog.Fatal(err)
	}

	for _, item := range list.Items {
		for k, v := range item.GetLabels() {
			common(k, item)
			slice := Res[k]
			slice.Add(v)
			Res[k] = slice
		}
	}
}

func common(k string, item unstructured.Unstructured) {
	if k == "mds" {
		fmt.Println(item)
	}
}

func restList() {

	// 从本机加载 kubeconfig 配置文件，因此第一个参数为空字符串
	config, err := clientcmd.BuildConfigFromFlags("", "")

	// kubeconfig 加载失败就直接退出了
	if err != nil {
		panic(err.Error())
	}

	// 参考 path : /api/v1/namespaces/{namespace}/pods
	config.APIPath = "api"
	// pod 的 group 是空字符串
	config.GroupVersion = &corev1.SchemeGroupVersion
	// 指定序列化工具
	config.NegotiatedSerializer = scheme.Codecs

	// 根据配置信息构建 restClient 实例
	restClient, err := rest.RESTClientFor(config)

	if err != nil {
		panic(err.Error())
	}

	// 保存 pod 结果的数据结构实例
	result := &corev1.PodList{}

	//  指定 namespace
	namespace := "kube-system"
	// 设置请求参数，然后发起请求
	// GET 请求
	err = restClient.Get().
		//  指定 namespace，参考 path : /api/v1/namespaces/{namespace}/pods
		Namespace(namespace).
		// 查找多个 pod，参考 path : /api/v1/namespaces/{namespace}/pods
		Resource("pods").
		// 指定大小限制和序列化工具
		VersionedParams(&metav1.ListOptions{Limit: 100}, scheme.ParameterCodec).
		// 请求
		Do(context.TODO()).
		// 结果存入 result
		Into(result)

	if err != nil {
		panic(err.Error())
	}

	for _, d := range result.Items {
		fmt.Printf("%v\t %v\t %v\n", d.Namespace, d.Status.Phase, d.Name)
	}
}
