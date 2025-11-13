package main

import (
	"flag"

	"k8s.io/klog/v2"
)

func main() {
	klog.InitFlags(flag.CommandLine)
	flag.Parse()
	klog.Info(123)
	klog.V(2).Info("asd")
}
