package main

import (
	"context"
	"os"

	corev1 "k8s.io/api/core/v1"
	"k8s.io/client-go/rest"
	"sigs.k8s.io/controller-runtime/pkg/builder"
	logf "sigs.k8s.io/controller-runtime/pkg/log"
	"sigs.k8s.io/controller-runtime/pkg/log/zap"
	"sigs.k8s.io/controller-runtime/pkg/manager"
	"sigs.k8s.io/controller-runtime/pkg/manager/signals"
	"sigs.k8s.io/controller-runtime/pkg/reconcile"
)

func main() {
	logf.SetLogger(zap.New())
	var mylog = logf.Log.WithName("jtproxy")
	config, _ := rest.InClusterConfig()
	mgr, err := manager.New(config, manager.Options{})
	if err != nil {
		mylog.Error(err, "unable to set up manager")
		os.Exit(1)
	}
	//mgr.GetClient().Get()
	// cr
	//schemeBuilder := runtime.NewSchemeBuilder(func(scheme *runtime.Scheme) error {
	//	scheme.AddKnownTypes(SchemeGroupVersion, &corev1.Pod{})
	//	metav1.AddToGroupVersion(scheme, SchemeGroupVersion)
	//	return nil
	//})
	//err = schemeBuilder.AddToScheme(mgr.GetScheme())
	//if err != nil {
	//	return
	//}

	err = builder.ControllerManagedBy(mgr).
		For(&corev1.Pod{}). // todo  for\watch的区别    把这个type 加入到内置的schema 这样，controller 在收到消息后，就可以把对应消息转换成这个结构体
		//监听 deployment
		//Watches(&source.Kind{Type:&v1.Deployment{}},
		//	handler.Funcs{
		//	   DeleteFunc: dbconfigController.OnDelete,
		//	   UpdateFunc: dbconfigController.OnUpdate,
		//	},
		//).
		Complete(PodController{})
	if err != nil {
		mylog.Error(err, "unable to create manager")
		os.Exit(1)
	}
	mgr.GetEventRecorderFor("dbconfig")
	var _ = mgr.Add // 执行start 的时候，也启动相应的服务
	var _ = mgr.AddHealthzCheck
	var _ = mgr.AddReadyzCheck
	var _ = mgr.AddMetricsExtraHandler

	if err = mgr.Start(signals.SetupSignalHandler()); err != nil {
		mylog.Error(err, "unable to start manager")
		os.Exit(1)
	}
	//clientcmd.BuildConfigFromFlags("", "./resources/config")
}

type PodController struct {
}

func (p PodController) Reconcile(ctx context.Context, request reconcile.Request) (reconcile.Result, error) {
	//TODO implement me
	panic("implement me")
}
