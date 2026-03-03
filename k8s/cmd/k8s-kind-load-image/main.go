package main

import (
	"flag"
	"fmt"
	"io"
	"log"
	"os"
	"os/exec"
	"sort"
	"strings"
	"sync"
	"time"

	"charm.land/bubbles/v2/progress"
	tea "charm.land/bubbletea/v2"
	"charm.land/lipgloss/v2"
	"sigs.k8s.io/kind/pkg/cluster"
	"sigs.k8s.io/kind/pkg/cluster/nodes"
)

var p *tea.Program
var tarImage = "/tmp/k8s-kind-load-image.tar"

func finalPause() tea.Cmd {
	return tea.Tick(time.Millisecond*750, func(_ time.Time) tea.Msg {
		return nil
	})
}

const (
	padding  = 2
	maxWidth = 80
)

var (
	helpStyle  = lipgloss.NewStyle().Foreground(lipgloss.Color("#626262")).Render
	titleStyle = lipgloss.NewStyle().Foreground(lipgloss.Color("#F78166")).Bold(true).Render
)

func Cmd(name string, args []string) {
	cmd := exec.Command(name, args...)
	cmd.Stdin = os.Stdin
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err := cmd.Run()
	if err != nil {
		log.Fatal(err)
	}
}

func main() {
	name := flag.String("name", "koord", "")
	node := flag.String("node", "", "")
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

	sort.Slice(nodeList, func(i, j int) bool {
		return nodeList[i].String() < nodeList[j].String()
	})

	stat, err := os.Stat(tarImage)
	if err != nil {
		log.Fatalf("Error getting file stats: %v", err)
	}
	if *node != "" {
		var tmp []nodes.Node
		for _, n := range nodeList {
			if n.String() == *node {
				tmp = append(tmp, n)
			}
		}
		nodeList = tmp
	}

	m := model{
		progresses: make([]progress.Model, len(nodeList)),
		nodeList:   nodeList,
		size:       stat.Size(),
		image:      *image,
		completed:  make([]bool, len(nodeList)),
	}

	// Initialize each progress bar
	for i := range m.progresses {
		m.progresses[i] = progress.New(progress.WithDefaultBlend())
		m.progresses[i].SetPercent(0.0)
	}

	p = tea.NewProgram(&m)
	if _, err := p.Run(); err != nil {
		fmt.Println("Oh no!", err)
		os.Exit(1)
	}

}

type model struct {
	progresses []progress.Model
	width      int
	nodeList   []nodes.Node
	size       int64
	image      string
	mu         sync.Mutex
	completed  []bool
	started    bool
}

type Reader struct {
	download int64
	total    int64
	r        io.Reader
	progress func(float64)
}

type tickMsg time.Time

func tickCmd() tea.Cmd {
	return tea.Tick(time.Millisecond*100, func(t time.Time) tea.Msg {
		return tickMsg(t)
	})
}

type processMsg struct {
	index   int
	percent float64
}

func (t *Reader) Read(p []byte) (n int, err error) {
	n, err = t.r.Read(p)
	if n > 0 {
		t.download += int64(n)
		if t.progress != nil && t.total > 0 {
			percent := float64(t.download) / float64(t.total)
			if percent > 1 {
				percent = 1
			}
			t.progress(percent)
		}
	}
	return n, err
}

var start sync.Once

type job struct {
	node  nodes.Node
	index int
}

func (m *model) Once() {
	// 限制并发数为 3，可以根据需要调整
	maxWorkers := 3
	jobs := make(chan job, len(m.nodeList))
	var wg sync.WaitGroup

	// 启动 worker pool
	for w := 0; w < maxWorkers; w++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for j := range jobs {
				m.loadImageToNode(j.node, j.index)
			}
		}()
	}

	// 发送任务到队列
	for i, node := range m.nodeList {
		jobs <- job{node: node, index: i}
	}
	close(jobs)

	// 等待所有任务完成
	wg.Wait()
}

func (m *model) loadImageToNode(node nodes.Node, index int) {
	args := []string{
		"exec",
		"-i",
		node.String(),
		"ctr",
		"--namespace=k8s.io",
		"images",
		"import",
		"--platform=linux/arm64",
		"-",
	}
	c := exec.Command("docker", args...)

	tarFile, err := os.Open(tarImage)
	if err != nil {
		fmt.Printf("Error opening tar file: %v\n", err)
		if p != nil {
			p.Send(processMsg{index: index, percent: 0})
		}
		return
	}
	defer tarFile.Close()

	c.Stdin = &Reader{
		r:        tarFile,
		download: 0,
		total:    m.size,
		progress: func(percent float64) {
			p.Send(processMsg{index: index, percent: percent})
		},
	}

	err = c.Run()
	if err != nil {
		fmt.Printf("Error executing command: %v\n", err)
		p.Send(processMsg{index: index, percent: 0})
	} else {
		p.Send(processMsg{index: index, percent: 1})
	}
}

func (m *model) Init() tea.Cmd {
	return tickCmd()
}

var _ tea.Model = &model{}

func (m *model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.KeyPressMsg:
		return m, tea.Quit

	case tea.WindowSizeMsg:
		m.width = msg.Width
		barWidth := msg.Width - padding*2 - 4
		if barWidth > maxWidth {
			barWidth = maxWidth
		}
		// Update width for all progress bars
		for i := range m.progresses {
			m.progresses[i].SetWidth(barWidth)
		}
		return m, nil
	case tickMsg:
		start.Do(func() {
			go m.Once()
		})
		return m, tickCmd()
	case processMsg:
		var cmds []tea.Cmd
		if msg.index >= 0 && msg.index < len(m.progresses) {
			cmds = append(cmds, m.progresses[msg.index].SetPercent(msg.percent))
			if msg.percent >= 1.0 {
				m.completed[msg.index] = true
			}
		}
		allComplete := true
		for _, c := range m.completed {
			if !c {
				allComplete = false
				break
			}
		}

		if allComplete {
			cmds = append(cmds, tea.Sequence(finalPause(), tea.Quit))
		}
		return m, tea.Batch(cmds...)

	case progress.FrameMsg:
		cmds := make([]tea.Cmd, 0, len(m.progresses))
		for i := range m.progresses {
			var cmd tea.Cmd
			m.progresses[i], cmd = m.progresses[i].Update(msg)
			if cmd != nil {
				cmds = append(cmds, cmd)
			}
		}
		return m, tea.Batch(cmds...)

	default:
		return m, nil
	}
}

func (m *model) View() tea.View {
	pad := strings.Repeat(" ", padding)
	var b strings.Builder

	b.WriteString("\n")
	b.WriteString(pad)
	b.WriteString(titleStyle(m.image))
	b.WriteString("\n\n")
	maxLength := 0
	for _, node := range m.nodeList {
		maxLength = max(maxLength, len(node.String()))
	}
	for i, p := range m.progresses {
		name := m.nodeList[i].String()
		b.WriteString(pad)
		b.WriteString(name)
		b.WriteString(strings.Repeat(" ", maxLength+1-len(name)))
		b.WriteString(p.View())
		b.WriteString("\n")
	}
	b.WriteString("\n")
	b.WriteString(pad)
	b.WriteString(helpStyle("Press any key to quit"))

	return tea.NewView(b.String())
}
