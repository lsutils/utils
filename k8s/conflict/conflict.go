package conflict

import "k8s.io/client-go/util/retry"

func main() {
	retry.RetryOnConflict(retry.DefaultRetry, func() error {
		return nil
	})
}
