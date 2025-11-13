package main

import (
	"context"
	"encoding/json"
	"flag"
	"net/http"

	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/klog/v2"
	"k8s.io/utils/pointer"
)

type LoggingTransport struct {
	rt http.RoundTripper
}

func (l *LoggingTransport) RoundTrip(request *http.Request) (*http.Response, error) {
	klog.Infoln(request.URL.String(), request.Method)
	return l.rt.RoundTrip(request)
}

var resourceName string
var kubeconfig string
var clean bool
var scaleAps bool
var key = "ls.com/raw-resources"

func main() {
	flag.StringVar(&kubeconfig, "kubeconfig", "", "absolute path to the kubeconfig file")
	flag.StringVar(&resourceName, "resource", "", "resource name")
	flag.BoolVar(&clean, "clean", false, "resource name")
	flag.BoolVar(&scaleAps, "scale-aps", false, "resource name")
	flag.Parse()
	clientConfig, err := clientcmd.BuildConfigFromFlags("", kubeconfig)
	if err != nil {
		klog.Fatalf("Error building kubeconfig: %s", err.Error())
		return
	}
	clientConfig.WrapTransport = func(rt http.RoundTripper) http.RoundTripper {
		return &LoggingTransport{rt: rt}
	}

	client, err := kubernetes.NewForConfig(clientConfig)
	if err != nil {
		klog.Fatalf("Error building kubernetes clientset: %s", err.Error())
		return
	}

	if scaleAps {

		dps, err := client.AppsV1().Deployments("aps-os").List(context.Background(), metav1.ListOptions{})
		if err != nil {
			klog.Fatalf("Error listing deployments: %s", err.Error())
		}

		for _, dp := range dps.Items {
			dp.Spec.Replicas = pointer.Int32(0)
			_, err = client.AppsV1().Deployments(dp.Namespace).Update(context.Background(), &dp, metav1.UpdateOptions{})
			if err != nil {
				klog.Fatalf("Error updating deployment %s: %s", dp.Name, err.Error())
			} else {
				klog.Infof("Updated deployment %s", dp.Name)
			}
		}
		return
	}

	dps, err := client.AppsV1().Deployments("").List(context.Background(), metav1.ListOptions{})
	if err != nil {
		klog.Fatalf("Error listing deployments: %s", err.Error())
	}
	if clean {
		for _, dp := range dps.Items {
			var res []corev1.ResourceRequirements
			json.Unmarshal([]byte(dp.Annotations[key]), &res)
			delete(dp.Annotations, key)
			for i, item := range res {
				dp.Spec.Template.Spec.Containers[i].Resources = item
			}
			_, err := client.AppsV1().Deployments(dp.Namespace).Update(context.Background(), &dp, metav1.UpdateOptions{})
			if err != nil {
				klog.Fatalf("Error updating deployment: %s", err.Error())
			} else {
				klog.Infof("Clean deployment: %s", dp.Name)
			}
		}
		return
	}

	for _, dp := range dps.Items {
		var res []corev1.ResourceRequirements
		for i, container := range dp.Spec.Template.Spec.Containers {
			res = append(res, container.Resources)
			dp.Spec.Template.Spec.Containers[i].Resources = corev1.ResourceRequirements{}
		}
		marshal, _ := json.Marshal(res)
		dp.Annotations[key] = string(marshal)

		_, err := client.AppsV1().Deployments(dp.Namespace).Update(context.Background(), &dp, metav1.UpdateOptions{})
		if err != nil {
			klog.Fatalf("Error updating deployment: %s", err.Error())
		} else {
			klog.Infof("Updated deployment: %s", dp.Name)
		}
	}
}
