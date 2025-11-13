package compents

import (
	"fmt"
	"reflect"
	"unsafe"
)

func string2byte() {
	text := "abc"
	stringHeader := (*reflect.StringHeader)(unsafe.Pointer(&text))
	var strBytes []byte
	bytesHeader := *(*reflect.SliceHeader)(unsafe.Pointer(&strBytes))
	bytesHeader.Data = stringHeader.Data
	bytesHeader.Len = stringHeader.Len
	bytesHeader.Cap = stringHeader.Len
	fmt.Println(*(*[]byte)(unsafe.Pointer(&bytesHeader)))
}

type User struct {
	Name string
}

func Struct2Byte() {
	u := User{Name: "XXX"}
	size := unsafe.Sizeof(u)
	var b []byte
	bytesHeader := *(*reflect.SliceHeader)(unsafe.Pointer(&b))
	bytesHeader.Data = uintptr(unsafe.Pointer(&u))
	bytesHeader.Len = int(size)
	bytesHeader.Cap = int(size)
	fmt.Println(b)
}
