package main

import (
	"context"
	"flag"
	"fmt"
	"path/filepath"
	"time"

	"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"
	"k8s.io/apimachinery/pkg/runtime"
	uruntime "k8s.io/apimachinery/pkg/util/runtime"
	"k8s.io/client-go/dynamic"
	"k8s.io/client-go/util/homedir"

	"k8s.io/klog/v2"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/wait"
	"k8s.io/apimachinery/pkg/watch"
	"k8s.io/client-go/tools/cache"
	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/client-go/util/workqueue"
)

type Controller struct {
	indexer  cache.Indexer
	queue    workqueue.RateLimitingInterface
	informer cache.Controller
}

func NewController(queue workqueue.RateLimitingInterface, indexer cache.Indexer, informer cache.Controller) *Controller {
	return &Controller{
		informer: informer,
		indexer:  indexer,
		queue:    queue,
	}
}

func (c *Controller) processNextItem() bool {
	key, quit := c.queue.Get()
	if quit {
		return false
	}
	defer c.queue.Done(key)
	return true
}

func (c *Controller) syncToStdout(key string) error {
	return nil
}

// handleErr checks if an error happened and makes sure we will retry later.
func (c *Controller) handleErr(err error, key interface{}) {
	if err == nil {
		// 忘记每次成功同步时key的#AddRateLimited历史记录.
		// 这确保了该键的更新 和 以后的处理不会因为过时的错误历史而延迟.
		c.queue.Forget(key)
		return
	}

	// This controller retries 5 times if something goes wrong. After that, it stops trying.
	if c.queue.NumRequeues(key) < 5 {
		klog.Infof("Error syncing   %v: %v", key, err)

		// Re-enqueue the key rate limited. Based on the rate limiter on the
		// queue and the re-enqueue history, the key will be processed later again.
		c.queue.AddRateLimited(key)
		return
	}

	c.queue.Forget(key)
	// Report to an external entity that, even after several retries, we could not successfully process this key
	uruntime.HandleError(err)
	klog.Infof("Dropping   %q out of the queue: %v", key, err)
}

// Run begins watching and syncing.
func (c *Controller) Run(workers int, stopCh chan struct{}) {
	defer uruntime.HandleCrash()

	// Let the workers stop when we are done
	defer c.queue.ShutDown()
	klog.Info("Starting  controller")
	// cache.sharedIndexInformer
	go c.informer.Run(stopCh) // ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️ 重要

	// 等待所有相关的缓存同步完成,然后才开始处理队列中的项
	_ = new(cache.DeltaFIFO).HasSynced
	if !cache.WaitForCacheSync(stopCh, c.informer.HasSynced) { // ✅
		uruntime.HandleError(fmt.Errorf("timed out waiting for caches to sync"))
		return
	}

	for i := 0; i < workers; i++ {
		go wait.Until(c.runWorker, time.Second, stopCh)
	}

	<-stopCh
	klog.Info("Stopping   controller")
}

func (c *Controller) runWorker() {
	for c.processNextItem() {
	}
}

func main() {
	var kubeconfig string
	var master string
	if home := homedir.HomeDir(); home != "" {
		flag.StringVar(&kubeconfig, "kubeconfig", filepath.Join(home, ".kube", "config"), "(optional) absolute path to the kubeconfig file")
	} else {
		flag.StringVar(&kubeconfig, "kubeconfig", "", "absolute path to the kubeconfig file")
	}
	flag.StringVar(&master, "master", "", "master url")
	flag.Parse()

	// creates the connection
	config, err := clientcmd.BuildConfigFromFlags(master, kubeconfig)
	if err != nil {
		klog.Fatal(err)
	}

	// creates the clientset
	dynamicHostClient, err := dynamic.NewForConfig(config)
	if err != nil {
		klog.Fatal(err)
	}

	s := schema.GroupVersionResource{
		Group:    "aps.datacanvas.com",
		Version:  "v1",
		Resource: "projects",
	}

	Run(dynamicHostClient, []schema.GroupVersionResource{s})
}

func Run(dynamicHostClient *dynamic.DynamicClient, ws []schema.GroupVersionResource) {
	for _, w := range ws {
		listFunc := func(opts metav1.ListOptions) (runtime.Object, error) {
			return dynamicHostClient.Resource(w).List(context.Background(), metav1.ListOptions{})
		}
		watchFunc := func(opts metav1.ListOptions) (watch.Interface, error) {
			return dynamicHostClient.Resource(w).Watch(context.Background(), metav1.ListOptions{})
		}
		lw := &cache.ListWatch{ListFunc: listFunc, WatchFunc: watchFunc}
		queue := workqueue.NewRateLimitingQueue(workqueue.DefaultControllerRateLimiter()) // ✅

		indexer, informer := cache.NewIndexerInformer(lw, &unstructured.Unstructured{}, 0, cache.ResourceEventHandlerFuncs{ // ✅ 对应 5. Dispatch Event
			AddFunc: func(obj interface{}) {

			},
			UpdateFunc: func(old interface{}, new interface{}) {
			},
			DeleteFunc: func(obj interface{}) {
			},
		}, cache.Indexers{})

		controller := NewController(queue, indexer, informer)

		// Now let's start the controller
		stop := make(chan struct{})
		defer close(stop)
		go controller.Run(1, stop)
	}
	select {}
}
