package main

import (
	"fmt"

	. "k8s.io/apimachinery/pkg/runtime"
)

func main() {
	case1()
}
func case1() {
	a := map[string]interface{}{
		"a": 1,
	}
	x := &A{}
	fmt.Println(DefaultUnstructuredConverter.FromUnstructured(a, x))
	fmt.Println(DefaultUnstructuredConverter.FromUnstructuredWithValidation(a, x, true))
	fmt.Println(x)
}

type A struct {
	B string
}
