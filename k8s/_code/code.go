package main

import (
	"k8s.io/apimachinery/pkg/runtime/serializer"
	clientgoscheme "k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/tools/clientcmd"
)

func main() {
	cfg, _ := clientcmd.BuildConfigFromFlags("", "")
	codecs := serializer.NewCodecFactory(clientgoscheme.Scheme)
	cfg.NegotiatedSerializer = codecs.WithoutConversion()
}
