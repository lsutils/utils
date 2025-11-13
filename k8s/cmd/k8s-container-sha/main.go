package main

import (
	"context"
	"flag"
	"fmt"
	"os"

	"github.com/lsutils/utils/k8s/helper"
	"github.com/olekukonko/tablewriter"
	"github.com/olekukonko/tablewriter/tw"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/types"
	"k8s.io/client-go/kubernetes"
)

func main() {
	containerName := flag.String("container-name", "", "container name")
	namespace := flag.String("namespace", "", "")
	restConfig := helper.NewK8sConfig().K8sRestConfig()

	client, err := kubernetes.NewForConfig(restConfig)
	if err != nil {
		panic(err)
	}

	ps, err := client.CoreV1().Pods("").List(context.Background(), metav1.ListOptions{})
	if err != nil {
		panic(err)
	}

	for _, p := range ps.Items {
		if p.Namespace == *namespace || *namespace == "" {
			for _, c := range p.Status.ContainerStatuses {
				ShaMaps[c.ImageID] = append(ShaMaps[c.ImageID], types.NamespacedName{
					Namespace: p.GetNamespace(),
					Name:      p.GetName(),
				})
			}
			for _, c := range p.Status.InitContainerStatuses {
				ShaMaps[c.ImageID] = append(ShaMaps[c.ImageID], types.NamespacedName{
					Namespace: p.GetNamespace(),
					Name:      p.GetName(),
				})
			}
		} else {
			for _, c := range p.Status.ContainerStatuses {
				if c.Name == *containerName {
					ShaMaps[c.ImageID] = append(ShaMaps[c.ImageID], types.NamespacedName{
						Namespace: p.GetNamespace(),
						Name:      p.GetName(),
					})
				}
			}
			for _, c := range p.Status.InitContainerStatuses {
				if c.Name == *containerName {
					ShaMaps[c.ImageID] = append(ShaMaps[c.ImageID], types.NamespacedName{
						Namespace: p.GetNamespace(),
						Name:      p.GetName(),
					})
				}
			}
		}

	}

	var data [][]string
	table := tablewriter.NewTable(os.Stdout, tablewriter.WithTrimSpace(tw.Off))
	table.Configure(func(config *tablewriter.Config) {
		config.Row.Alignment.Global = tw.AlignRight
	})
	table.Header([]string{"Tree"})

	for k, vs := range ShaMaps {
		data = append(data, []string{
			k,
		})
		for _, v := range vs {
			data = append(data, []string{
				fmt.Sprintf(" %s/%s", v.Namespace, v.Name),
			})
		}
	}

	table.Bulk(data)
	table.Render()

}

var ShaMaps = make(map[string][]types.NamespacedName)
