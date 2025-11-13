package work_pool

import (
	"fmt"
	"log"
	"sync"
	"time"
)

// 创建真正执行任务的worker
type worker struct {
	workerPool chan *worker
	jobChannel chan Job
	stop       chan struct{}
}

// 开始执行任务
func (w *worker) start() {
	go func() {
		var job Job
		for {
			// worker free, add it to pool
			w.workerPool <- w

			select {
			case job = <-w.jobChannel:
				runJob(job)
			case <-w.stop:
				w.stop <- struct{}{}
				return
			}
		}
	}()
}

// 真正执行任务
func runJob(f func()) {
	defer func() {
		if err := recover(); err != nil {
			log.Printf("gpool Job panic err: %v", err)
		}
	}()

	f()
}

// 初始化worker
func newWorker(pool chan *worker) *worker {
	return &worker{
		workerPool: pool,
		jobChannel: make(chan Job),
		stop:       make(chan struct{}),
	}
}

// 接受来自客户端的任务，并等待第一个空闲的worker交付工作
type dispatcher struct {
	workerPool chan *worker
	jobQueue   chan Job
	stop       chan struct{}
}

// 分配任务
func (d *dispatcher) dispatch() {
	for {
		select {
		case job := <-d.jobQueue:
			worker := <-d.workerPool
			worker.jobChannel <- job
		case <-d.stop:
			for i := 0; i < cap(d.workerPool); i++ {
				worker := <-d.workerPool

				worker.stop <- struct{}{}
				<-worker.stop
			}

			d.stop <- struct{}{}
			return
		}
	}
}

// 初始化分配器
func newDispatcher(workerPool chan *worker, jobQueue chan Job) *dispatcher {
	d := &dispatcher{
		workerPool: workerPool,
		jobQueue:   jobQueue,
		stop:       make(chan struct{}),
	}

	for i := 0; i < cap(d.workerPool); i++ {
		worker := newWorker(d.workerPool)
		worker.start()
	}

	go d.dispatch()
	return d
}

type Job func()

type Pool struct {
	JobQueue   chan Job
	dispatcher *dispatcher
	wg         sync.WaitGroup
}

// NewPool 初始化goroutine Pool
func NewPool(numWorkers int, jobQueueLen int) *Pool {
	jobQueue := make(chan Job, jobQueueLen)
	workerPool := make(chan *worker, numWorkers)

	pool := &Pool{
		JobQueue:   jobQueue,
		dispatcher: newDispatcher(workerPool, jobQueue),
	}

	return pool
}

// 打包任务
func (p *Pool) wrapJob(job func()) func() {
	return func() {
		defer p.JobDone()
		job()
	}
}

func (p *Pool) SendJobWithTimeout(job func(), t time.Duration) bool {
	select {
	case <-time.After(t):
		return false
	case p.JobQueue <- p.wrapJob(job):
		p.WaitCount(1)
		return true
	}
}

func (p *Pool) SendJobWithDeadline(job func(), t time.Time) bool {
	s := t.Sub(time.Now())
	if s <= 0 {
		s = time.Second // timeout
	}
	select {
	case <-time.After(s):
		return false
	case p.JobQueue <- p.wrapJob(job):
		p.WaitCount(1)
		return true
	}
}

// SendJob 发送任务
func (p *Pool) SendJob(job func()) {
	p.WaitCount(1)
	p.JobQueue <- p.wrapJob(job)
}

func (p *Pool) JobDone() {
	p.wg.Done()
}

func (p *Pool) WaitCount(count int) {
	p.wg.Add(count)
}

// WaitAll 等待所有goroutine退出
func (p *Pool) WaitAll() {
	p.wg.Wait()
}

// Release 释放资源
func (p *Pool) Release() {
	p.dispatcher.stop <- struct{}{}
	<-p.dispatcher.stop
}

func main() {
	// 初始化 10个worker(goroutine) 任务队列长度是1000
	var pool = NewPool(10, 1000)

	pool.SendJobWithTimeout(func() {
		fmt.Println("SendJobWithTimeout")
	}, 2*time.Second)

	// 发送任务
	pool.SendJob(func() {
		fmt.Println("send job")
	})

	pool.SendJobWithDeadline(func() {
		fmt.Println("SendJobWithDeadline")
	}, time.Now().Add(time.Second*3))

	// 等待资源释放和退出
	pool.WaitAll()
	pool.Release()
}
