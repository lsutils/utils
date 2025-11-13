package other

import (
	"fmt"
	"testing"

	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/apimachinery/pkg/selection"
)

func TestLabel(t *testing.T) {
	//parse, _ := labels.Parse("app=we2b")

	var parse = labels.SelectorFromValidatedSet(nil)
	requirement, err := labels.NewRequirement("app", selection.Equals, []string{"web2"})
	fmt.Println(err)
	parse = parse.Add(*requirement)

	set := labels.Set{"app": "web", "tier": "frontend"}

	if parse.Matches(set) {
		fmt.Println("Matched!")
	} else {
		fmt.Println("Not matched!")
	}
}
