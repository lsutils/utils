package main

import (
	"flag"
	"fmt"
	"log"
	"os"
	"os/exec"
	"sync"

	"charm.land/bubbles/v2/progress"
	tea "charm.land/bubbletea/v2"
	"github.com/lsutils/utils/k8s/cmd/k8s-kind-load-image/pkg"
	"sigs.k8s.io/kind/pkg/cluster"
	"sigs.k8s.io/kind/pkg/cluster/nodes"
)

var p *tea.Program
var tarImage = "/tmp/k8s-kind-load-image.tar"

type progressWriter struct {
	total      int
	downloaded int
	onProgress func(float64)
	nodeList   []nodes.Node
}
type editorFinishedMsg struct{ err error }

func (pw *progressWriter) Start() {
	wg := sync.WaitGroup{}
	for _, item := range pw.nodeList {
		node := item
		wg.Add(1)
		go func() {
			c := exec.Command("docker", []string{
				"exec",
				"-i",
				node.String(),
				"ctr",
				"--namespace=k8s.io",
				"images",
				"import",
				"--platform=linux/arm64",
				"-",
				"<",
				tarImage,
			}...)
			tea.ExecProcess(c, func(err error) tea.Msg {
				return editorFinishedMsg{err}
			})
			wg.Done()
			pw.UpdateProcess()
		}()
	}
	wg.Wait()
}

func (pw *progressWriter) UpdateProcess() {
	pw.downloaded += 1
	if pw.total > 0 && pw.onProgress != nil {
		pw.onProgress(float64(pw.downloaded) / float64(pw.total))
	}
}

func Cmd(name string, args []string) {
	cmd := exec.Command(name, args...)
	err := cmd.Run()
	if err != nil {
		log.Fatal(err)
	}
}

func main() {
	name := flag.String("name", "koord", "")
	image := flag.String("image", "openkruise/kruise-manager:v1.8.3", "")
	flag.Parse()

	if *name == "" || *image == "" {
		flag.Usage()
		os.Exit(1)
	}
	Cmd("docker", []string{"pull", *image})
	Cmd("docker", []string{"save", *image, "-o", tarImage})

	provider := cluster.NewProvider()

	nodeList, err := provider.ListInternalNodes(*name)
	if err != nil {
		log.Fatal(err)
	}

	pw := &progressWriter{
		total:    len(nodeList),
		nodeList: nodeList,
	}

	pw.onProgress = func(ratio float64) {
		p.Println("load ", *image, " to cluster ", *name)
		p.Send(pkg.ProgressMsg(ratio))
	}
	m := pkg.Model{
		Progress: progress.New(progress.WithDefaultBlend()),
	}
	p = tea.NewProgram(m)
	go pw.Start()
	if _, err := p.Run(); err != nil {
		fmt.Println("error running program:", err)
		os.Exit(1)
	}
}
