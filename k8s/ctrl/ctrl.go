package main

import (
	"context"
	"fmt"
	"os"

	v1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/types"
	"k8s.io/client-go/util/workqueue"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/event"
	"sigs.k8s.io/controller-runtime/pkg/reconcile"
)

type R struct {
}

func (r R) Reconcile(ctx context.Context, request reconcile.Request) (reconcile.Result, error) {
	fmt.Println(request.NamespacedName)
	return reconcile.Result{}, nil
}

func main() {
	var r = new(R)

	mgr, err := ctrl.NewManager(ctrl.GetConfigOrDie(), ctrl.Options{
		//NewClient: func(config *rest.Config, options client.Options) (client.Client, error) {
		//	options.Cache.DisableFor = nil
		//	return client.New(config, options)
		//},
		//Cache: cache.Options{
		//	HTTPClient:            nil,
		//	Scheme:                nil,
		//	Mapper:                nil,
		//	SyncPeriod:            nil,
		//	Namespaces:            nil,
		//	DefaultLabelSelector:  nil,
		//	DefaultFieldSelector:  nil,
		//	DefaultTransform:      nil,
		//	ByObject:              nil,
		//	UnsafeDisableDeepCopy: nil,
		//},
	})
	if err != nil {
		os.Exit(1)
	}
	_ = mgr.Start
	_ = mgr.Add
	// -------------------------

	//ctl, err := controller.New("svc-name", mgr, controller.Options{
	//	Reconciler:              r,
	//	MaxConcurrentReconciles: 2,
	//})
	//ctl.Watch(source.Kind(mgr.GetCache(), &v1.Pod{}), &handler.EnqueueRequestForObject{})
	//fmt.Println(ctl.Watch(source.Kind(mgr.GetCache(), &v1.Pod{}), &A{}))
	//mgr.GetScheme().ObjectKinds(&v1.Pod{})
	//mgr.Start(context.Background())
	// -------------------------

	//noop := reconcile.Func(func(context.Context, reconcile.Request) (reconcile.Result, error) {
	//	fmt.Println(123)
	//	return reconcile.Result{}, nil
	//})
	//ctrl.NewControllerManagedBy(mgr).
	//	For(&v1.Pod{}, builder.WithPredicates(
	//		predicate.Funcs{
	//			CreateFunc: func(event event.CreateEvent) bool {
	//				fmt.Println(1)
	//				return true
	//			},
	//			DeleteFunc: func(event event.DeleteEvent) bool {
	//				return false
	//			},
	//			UpdateFunc: func(event event.UpdateEvent) bool {
	//				return true
	//			},
	//			GenericFunc: func(genericEvent event.GenericEvent) bool {
	//				return true
	//			},
	//		},
	//	)).Complete(r)
	//mapper, err := apiutil.NewDynamicRESTMapper(ctrl.GetConfigOrDie(), mgr.GetHTTPClient())
	ctrl.NewControllerManagedBy(mgr).Named("Pod").
		//Watches(&v1.Node{}, &handler.EnqueueRequestForObject{}).
		//Watches(&v1.Pod{}, handler.EnqueueRequestForOwner(scheme.Scheme, mapper, &v1.Pod{})). // 看demo
		For(&v1.ConfigMap{}).Owns(&v1.Pod{}).Complete(r) // 将 pod  owner是configmap 触发调谐

	//ctrl.NewWebhookManagedBy(mgr).For(&v1.Pod{}).Complete()
	//var _ webhook.Defaulter = v1.Pod{}
	//var _ webhook.Validator = v1.Pod{}
	//	事件-->curd-->调谐

	//Watches(&source.Kind{Type: &v1.Pod{}}, &handler.EnqueueRequestForObject{}).
	//Build(noop)

	if err := mgr.Start(ctrl.SetupSignalHandler()); err != nil {
		os.Exit(1)
	}

}

type A struct {
}

func (a A) Create(ctx context.Context, evt event.CreateEvent, q workqueue.RateLimitingInterface) {
	fmt.Println("Create")
	q.Add(reconcile.Request{NamespacedName: types.NamespacedName{ // 触发调谐
		Name:      evt.Object.GetName(),
		Namespace: evt.Object.GetNamespace(),
	}})

}

func (a A) Update(ctx context.Context, event event.UpdateEvent, limitingInterface workqueue.RateLimitingInterface) {
	fmt.Println("Update")
}

func (a A) Delete(ctx context.Context, event event.DeleteEvent, limitingInterface workqueue.RateLimitingInterface) {
	fmt.Println("Delete")
}

func (a A) Generic(ctx context.Context, event event.GenericEvent, limitingInterface workqueue.RateLimitingInterface) {
	fmt.Println("Generic")
}
