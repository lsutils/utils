package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	fmt.Println(os.Args)

	if len(os.Args) >= 2 {
		if os.Args[1] == "-i" {
			flags := os.Args[2]
			s := flags[1]
			flags = strings.TrimPrefix(flags, "s")
			flags = strings.TrimSuffix(flags, "g")

			fmt.Printf("%s  %v\n", flags, s)
		}
	}
}
