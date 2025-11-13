package main

import (
	"context"
	"fmt"
	"log"

	"github.com/lsutils/utils/k8s/gvk"
	"github.com/lsutils/utils/k8s/helper"
	appsv1 "k8s.io/api/apps/v1"
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/wait"
	"k8s.io/cli-runtime/pkg/genericclioptions"
	"k8s.io/client-go/informers"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/tools/cache"
	"k8s.io/client-go/tools/clientcmd"
)

type aaa struct {
}

func (a aaa) OnAdd(obj interface{}, isInInitialList bool) {
	//fmt.Println("OnAdd", obj.(*corev1.ConfigMap).Name)
}

func (a aaa) OnUpdate(oldObj, newObj interface{}) {

}

func (a aaa) OnDelete(obj interface{}) {
	//fmt.Println("OnDelete", obj.(*corev1.ConfigMap).Name)
}

func main2() {
	flags := genericclioptions.NewConfigFlags(true)
	config, err := flags.ToRawKubeConfigLoader().ClientConfig()
	fmt.Println(config)
	//clientFor, err := kubernetes.NewForConfig(k8s.NewK8sConfig().K8sRestConfig())
	//if err != nil {
	//	log.Fatalln(err)
	//}
	//clientFor.RESTClient()
	//clientFor.CoreV1().RESTClient()
	//lw := cache.NewListWatchFromClient(clientFor.CoreV1().RESTClient(), "configmaps", corev1.NamespaceAll, fields.Everything())
	// ------------------------------
	//store, informer := cache.NewInformer(lw, &corev1.ConfigMap{}, 0, &aaa{}) // 单个handler
	//go informer.Run(wait.NeverStop)
	//// 等待3秒 同步缓存
	//time.Sleep(3 * time.Second)
	//// 从缓存中获取监听到的 configmap 资源
	//fmt.Println(store.List())

	// ------------------------------

	//sharedInformer := cache.NewSharedInformer(lw, &v1.ConfigMap{}, 0)
	//sharedInformer.AddEventHandler(&aaa{})
	//sharedInformer.AddEventHandler(&aaa{})
	//sharedInformer.Run(wait.NeverStop)

	// ------------------------------

	//indexer2 := cache.Indexers{
	//	cache.NamespaceIndex: cache.MetaNamespaceIndexFunc,
	//}
	//informer2, controller := cache.NewIndexerInformer(lw, &corev1.ConfigMap{}, 0, &aaa{}, indexer2)
	//go controller.Run(wait.NeverStop)
	//if !cache.WaitForCacheSync(wait.NeverStop, controller.HasSynced) {
	//	log.Fatal("sync error")
	//}
	//
	//fmt.Println(informer2.ListKeys())
	//fmt.Println(informer2.IndexKeys(cache.NamespaceIndex, corev1.NamespaceAll))

	// ------------------------------

	//config, _ := rest.InClusterConfig()
	client, _ := kubernetes.NewForConfig(helper.NewK8sConfig().K8sRestConfig())
	sharedInformerFactory := informers.NewSharedInformerFactory(client, 0)
	//labels.SelectorFromSet(map[string]string{
	//	"app": "prod",
	//})

	var _ = appsv1.Deployment{}
	resource, err := sharedInformerFactory.ForResource(schema.GroupVersionResource{
		Group:    "apps",
		Version:  "v1",
		Resource: "deployments",
	})

	if err != nil {
		log.Fatalln(err)
	}
	resource.Informer().AddEventHandler(&aaa{})
	resource.Informer().AddIndexers(cache.Indexers{
		cache.NamespaceIndex: cache.MetaNamespaceIndexFunc,
	})

	//resource.Lister().ByNamespace("default").Get("")
	//resource.Lister().ByNamespace("default").List(labels.Everything())

	// 启动 informer，List & Watch
	sharedInformerFactory.Start(wait.NeverStop) // 本身就是 goroutine

	//if !cache.WaitForCacheSync(wait.NeverStop, resource.Informer().HasSynced) {}
	// 等待所有启动的 Informer 的缓存被同步
	sharedInformerFactory.WaitForCacheSync(wait.NeverStop)

	keys1, _ := resource.Informer().GetIndexer().IndexKeys(cache.NamespaceIndex, "XXXX")
	fmt.Println(keys1)
	keys2, _ := resource.Informer().GetIndexer().IndexKeys("index2", "asd")
	fmt.Println(keys2)
	fmt.Println(resource.Lister().List(labels.Everything()))
	keys := intersect(keys1, keys2)

	for _, indexKey := range keys {
		indexItems, _ := resource.Informer().GetIndexer().ByIndex(cache.NamespaceIndex, indexKey)
		fmt.Println(indexItems)
	}

	//sharedInformerFactory.Core().V1().ConfigMaps().Lister().List(labels.SelectorFromSet(map[string]string{
	//	"app": "prod",
	//}))
	select {}
}
func intersect(a []string, b []string) []string {
	inter := make([]string, 0)
	mp := make(map[string]bool)

	for _, s := range a {
		if _, ok := mp[s]; !ok {
			mp[s] = true
		}
	}
	for _, s := range b {
		if _, ok := mp[s]; ok {
			inter = append(inter, s)
		}
	}

	return inter
}

func main() {
	// 加载 Kubernetes 配置文件
	config, err := clientcmd.BuildConfigFromFlags("", "/Users/acejilam/.kube/config")
	if err != nil {
		panic(err.Error())
	}

	// 创建 Kubernetes 客户端
	clientset, err := kubernetes.NewForConfig(config)
	if err != nil {
		panic(err.Error())
	}

	// 创建 InformerFactory
	factory := informers.NewSharedInformerFactory(clientset, 0)

	//var _ = internal.NewInformersMap
	// 获取资源对象的 Informer
	informer := factory.Core().V1().Pods().Informer()
	// 定义 Informer 的事件处理函数
	informer.AddEventHandler(cache.ResourceEventHandlerFuncs{
		func(obj interface{}) {
			pod := obj.(*corev1.Pod)
			gvk, _ := gvk.GVKForObject(pod, scheme.Scheme)
			pod.SetGroupVersionKind(gvk)

			fmt.Printf("New Pod added: %s (Kind: %s, Version: %s)\n", pod.Name, pod.Kind, pod.APIVersion)
		},
		func(oldObj, newObj interface{}) {
			pod := newObj.(*corev1.Pod)
			fmt.Printf("Pod updated: %s (Kind: %s, Version: %s)\n", pod.Name, pod.Kind, pod.APIVersion)
		},
		func(obj interface{}) {
			pod := obj.(*corev1.Pod)
			fmt.Printf("Pod deleted: %s (Kind: %s, Version: %s)\n", pod.Name, pod.Kind, pod.APIVersion)
		},
	})
	// 启动 Informer
	stopCh := make(chan struct{})
	defer close(stopCh)
	go informer.Run(stopCh)
	// 等待 Informer 同步完成
	if !cache.WaitForCacheSync(stopCh, informer.HasSynced) {
		panic("Failed to sync informer cache")
	}

	// 阻塞主线程
	//select {}
	StopInformer(informer)

}

// ------------------ 如何重启 Informer 时清理缓存数据

func StopInformer(informer cache.SharedIndexInformer) {
	// 从informer中获取 Store 对象 (重点)
	store := informer.GetStore()
	// 遍历对象进行删除
	for _, obj := range store.List() {
		// delete 对象
		if err := store.Delete(obj); err != nil {
			log.Println(context.TODO(), "k8s.Stop delete object error. err %s", err.Error())
		}
	}
	fmt.Println(store.List())
}
