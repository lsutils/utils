package main

import (
	"fmt"
	"reflect"
	"runtime"
)

func xxxxx() {

}

func main() {
	cbName := runtime.FuncForPC(reflect.ValueOf(xxxxx).Pointer()).Name()
	fmt.Println(cbName)
}
