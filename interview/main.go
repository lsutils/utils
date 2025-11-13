package main

import (
	"fmt"
	"reflect"
	"sync"
)

func case1() {
	a := [3]int{1, 2, 3}
	//interview := []int{1, 2, 3}
	for k, v := range a {
		if k == 0 {
			a[0], a[1] = 100, 200
			fmt.Println(a)
		}
		a[k] = 100 + v
	}
	fmt.Println(a)
}
func main() {
	case4()
}

// func case2() (err error) {
func case2() error { // 不会返回
	var err error
	defer func() {
		if r := recover(); r != nil {
			err = fmt.Errorf("%s", r)
		}
	}()
	raisePanic()
	return err
}

func raisePanic() {
	panic("panic")
}

func case3() {
	var a uint = 0
	var b uint = 1
	c := a - b
	fmt.Println(reflect.TypeOf(c))
	fmt.Println(c)
}

// 控制循环次数
var count = 5

func case4() {
	wg := sync.WaitGroup{}

	chanA := make(chan struct{}, 1)
	chanB := make(chan struct{}, 1)
	chanC := make(chan struct{}, 1)

	chanA <- struct{}{}

	wg.Add(3)

	go printA(&wg, chanA, chanB)
	go printB(&wg, chanB, chanC)
	go printC(&wg, chanC, chanA)

	wg.Wait()
	close(chanA)
	close(chanB)
	close(chanC)
}

func printA(wg *sync.WaitGroup, chanA, chanB chan struct{}) {
	defer wg.Done()
	for i := 0; i < count; i++ {
		<-chanA
		fmt.Println("A")

		chanB <- struct{}{}
	}
}

func printB(wg *sync.WaitGroup, chanB, chanC chan struct{}) {
	defer wg.Done()
	for i := 0; i < count; i++ {
		<-chanB
		fmt.Println("B")

		chanC <- struct{}{}
	}
}

func printC(wg *sync.WaitGroup, chanC, chanA chan struct{}) {
	defer wg.Done()
	for i := 0; i < count; i++ {
		<-chanC
		fmt.Println("C")

		chanA <- struct{}{}
	}
}
