package main

import (
	"context"
	"fmt"
	"os"
	"path/filepath"

	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/cli-runtime/pkg/genericclioptions"
	"k8s.io/cli-runtime/pkg/printers"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/client-go/util/homedir"
)

func main() {
	cfg, _ := clientcmd.BuildConfigFromFlags("", filepath.Join(homedir.HomeDir(), ".kube", "config"))

	kubeClient, _ := kubernetes.NewForConfig(cfg)
	_, _ = kubeClient.CoreV1().Pods("").Get(context.Background(), "", metav1.GetOptions{})
	//out, _, err := r.decoder.Decode(r.body, nil, nil)
	var _ = new(runtime.WithoutVersionDecoder).Decode // 将gvk 置空了
	tablePrinter := printers.NewTablePrinter(printers.PrintOptions{
		NoHeaders:        false,
		WithNamespace:    false,
		WithKind:         false,
		Wide:             false,
		ShowLabels:       false,
		Kind:             schema.GroupKind{},
		ColumnLabels:     nil,
		SortBy:           "",
		AllowMissingKeys: false,
	})
	p := &corev1.Pod{
		TypeMeta:   metav1.TypeMeta{},
		ObjectMeta: metav1.ObjectMeta{Name: "x", Namespace: "default"},
		Spec: corev1.PodSpec{Containers: []corev1.Container{corev1.Container{
			Name:  "c",
			Image: "centos:7",
		}}},
		Status: corev1.PodStatus{},
	}
	jsonYamlPrintFlags := genericclioptions.NewJSONYamlPrintFlags()
	printer, _ := jsonYamlPrintFlags.ToPrinter("yaml")
	fmt.Println(tablePrinter)
	GVKForObject(p, scheme.Scheme)
	err := printer.PrintObj(p, os.Stdout)
	fmt.Println(err)
	tablePrinter.PrintObj(p, os.Stdout)
	tablePrinter.PrintObj(&metav1.Table{
		TypeMeta: metav1.TypeMeta{},
		ListMeta: metav1.ListMeta{},
		ColumnDefinitions: []metav1.TableColumnDefinition{
			metav1.TableColumnDefinition{
				Name: "名称",
			},
		},
		Rows: []metav1.TableRow{
			metav1.TableRow{
				Cells: []interface{}{
					1,
				},
			},
		},
	}, os.Stdout)

}

func GVKForObject(obj runtime.Object, scheme *runtime.Scheme) error {
	kinds, _, err := scheme.ObjectKinds(obj)
	if err != nil {
		return err
	}
	for _, gvk := range kinds {
		if len(gvk.Kind) == 0 {
			continue
		}
		if len(gvk.Version) == 0 || gvk.Version == runtime.APIVersionInternal {
			continue
		}
		obj.GetObjectKind().SetGroupVersionKind(gvk)
		break

	}
	return nil

}
