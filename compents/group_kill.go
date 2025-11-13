package compents

import (
	"syscall"
)

func main() {
	syscall.Kill(-1, syscall.SIGTERM)
}
