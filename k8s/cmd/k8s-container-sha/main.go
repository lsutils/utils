package main

import (
	"context"
	"flag"
	"os"
	"sort"
	"strings"

	tinr "gitee.com/ls-2018/sync/utils"
	"github.com/lsutils/utils/k8s/helper"
	"github.com/olekukonko/tablewriter"
	"github.com/olekukonko/tablewriter/renderer"
	"github.com/olekukonko/tablewriter/tw"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/types"
	"k8s.io/client-go/kubernetes"
	"k8s.io/kube-openapi/pkg/util/sets"
)

func addReverseName(name string) string {
	before := strings.Trim(tinr.ReverseImage([]string{name}), " \n\r\t")
	if before == name {
		return name
	}
	return before + " <---- " + name
}

func findImage(containerName string, pod *v1.Pod) string {
	for _, container := range pod.Spec.Containers {
		if container.Name == containerName {
			return addReverseName(container.Image)
		}
	}
	for _, container := range pod.Spec.InitContainers {
		if container.Name == containerName {
			return addReverseName(container.Image)
		}
	}

	return ""
}

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

				insert(ShaPodsMaps, c.ImageID, types.NamespacedName{Namespace: p.GetNamespace(), Name: p.GetName()}.String())
				insert(ShaImagesMaps, c.ImageID, findImage(c.Name, &p))
			}
			for _, c := range p.Status.InitContainerStatuses {

				insert(ShaPodsMaps, c.ImageID, types.NamespacedName{Namespace: p.GetNamespace(), Name: p.GetName()}.String())
				insert(ShaImagesMaps, c.ImageID, findImage(c.Name, &p))

			}
		} else {
			for _, c := range p.Status.ContainerStatuses {
				if c.Name == *containerName {
					insert(ShaPodsMaps, c.ImageID, types.NamespacedName{Namespace: p.GetNamespace(), Name: p.GetName()}.String())
					insert(ShaImagesMaps, c.ImageID, findImage(c.Name, &p))
				}
			}
			for _, c := range p.Status.InitContainerStatuses {
				if c.Name == *containerName {
					insert(ShaPodsMaps, c.ImageID, types.NamespacedName{Namespace: p.GetNamespace(), Name: p.GetName()}.String())
					insert(ShaImagesMaps, c.ImageID, findImage(c.Name, &p))
				}
			}
		}
	}

	var data [][]string
	rend := tw.Rendition{
		Settings: tw.Settings{
			Separators: tw.Separators{BetweenRows: tw.On},
			Lines:      tw.Lines{ShowHeaderLine: tw.On},
		},
		Symbols: tw.NewSymbols(tw.StyleNature),
	}
	table := tablewriter.NewTable(os.Stdout,
		tablewriter.WithTrimSpace(tw.On),
		tablewriter.WithRenderer(renderer.NewBlueprint(rend)),
		tablewriter.WithConfig(tablewriter.Config{
			Row: tw.CellConfig{
				Alignment: tw.CellAlignment{
					PerColumn: []tw.Align{tw.AlignRight, tw.AlignLeft, tw.AlignLeft},
				},
			},
		}),
	)

	table.Header([]string{"IMAGE", "PODS"})
	allK := []string{}
	for k, _ := range ShaPodsMaps {
		allK = append(allK, k)
	}
	sort.Strings(allK)

	for _, k := range allK {
		ps := ShaPodsMaps[k]
		ks := []string{k}
		for _, v := range ShaImagesMaps[k].List() {
			ks = append(ks, v)
		}

		data = append(data, []string{strings.Join(ks, "\n"),
			strings.Join(ps.List(), "\n"),
		})
	}

	table.Bulk(data)
	table.Render()
}

func insert(maps map[string]*Set, id string, s string) {
	ss := strings.Split(id, "sha256")
	id = "sha256" + ss[len(ss)-1]
	if _, ok := maps[id]; !ok {
		maps[id] = &Set{
			data: make(sets.String),
		}
	}
	set := maps[id]
	set.Insert(s)
}

type Set struct {
	data sets.String
}

func (s *Set) List() []string {
	return s.data.List()
}
func (s *Set) Insert(items ...string) {
	s.data.Insert(items...)
}

var ShaPodsMaps = make(map[string]*Set)
var ShaImagesMaps = make(map[string]*Set)
