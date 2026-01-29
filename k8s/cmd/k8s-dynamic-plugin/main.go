package main

import (
	"log"

	"github.com/traefik/yaegi/interp"
	"github.com/traefik/yaegi/stdlib"
)

func main() {
	i := interp.New(interp.Options{})
	if err := i.Use(stdlib.Symbols); err != nil {
		log.Fatal(err)
	}

	_, err := i.Eval(`package demo

func NewSample() string {
	return "NewSample"
}
`)
	if err != nil {
		log.Fatal(err)
	}
}
