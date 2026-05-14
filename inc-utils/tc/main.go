package main

import (
	"fmt"
	"os"
	"os/exec"
)

func main() {
	cmd := exec.Command("traffic", "init")
	cmd.Env = append(os.Environ(), "INTERFACE=eth0")
	cmd.CombinedOutput()

	environ := map[string]interface{}{
		"ID":        "ingress/po/ns/pod",
		"CLASSIFY":  fmt.Sprintf("%x", 1), // 0~65535
		"BANDWIDTH": "10mbps",
		"SOURCE":    "podip",
		"DIRECTION": "egress",
	}
	rules := make([]string, 0, len(environ))
	for k, v := range environ {
		rules = append(rules, fmt.Sprintf("%s=%v", k, v))
	}
	cmd = exec.Command("traffic", "add") // del
	env := append(os.Environ(), rules...)
	env = append(env, "INTERFACE=eth0")
	cmd.Env = env
	cmd.CombinedOutput()

}
