package main

import (
	"fmt"
	"io"
	"os"
	"strings"

	"github.com/lsutils/utils/sync/utils"
)

func main() {
	var lines []string
	if len(os.Args) > 1 {
		lines = os.Args[1:]
	} else {
		data, _ := io.ReadAll(os.Stdin)
		lines = strings.Split(string(data), "\n")
	}
	fmt.Println(utils.ReverseImage(lines))
}
