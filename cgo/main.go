package main

import "C"
import "unsafe"

//gcc -c src/my.c -I includes/ -o includes/my.o && ar -crs includes/my.a includes/my.o

/*
#cgo CFLAGS:  -I /root/liushuo/c/includes
#cgo LDFLAGS: -L /root/liushuo/c/includes -l:my.a

#include <stdio.h>
#include <stdlib.h>
#include "my.h"
*/
import "C"

func main() {
	C.print()
	str := C.CString("hello world")
	defer C.free(unsafe.Pointer(str))
	C.puts(str)
}
