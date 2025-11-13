package wait

import "k8s.io/apimachinery/pkg/util/wait"

func w() {
	_ = wait.PollUntilContextTimeout
}
