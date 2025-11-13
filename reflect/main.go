package main

import (
	"fmt"
	"reflect"

	v1 "github.com/lsutils/utils/reflect/v1/a"
	v2 "github.com/lsutils/utils/reflect/v2/a"
	"k8s.io/client-go/kubernetes/scheme"
)

func main() {
	a := v1.Student{}
	b := v2.Student{}
	fmt.Println(reflect.TypeOf(a))
	fmt.Println(reflect.TypeOf(b))
	var _ = scheme.AddToScheme
}
