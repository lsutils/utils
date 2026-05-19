package mod

import (
	"fmt"

	"sigs.k8s.io/kustomize/kyaml/kio"
	kyaml "sigs.k8s.io/kustomize/kyaml/yaml"
)

func main() {
	manifests, err := kio.ParseAll(`kind: NameSpace
apiVersion: v1
metadata:
  name: xxx
---
kind: NameSpace
apiVersion: v1
metadata:
  name: xxx
`)
	if err != nil {
		panic(err)
	}
	var combinedManifests []*kyaml.RNode
	for _, manifest := range manifests {
		manifest.PipeE(kyaml.SetK8sName("filenameAnnotation"))
		manifest.PipeE(kyaml.SetAnnotation("filenameAnnotation", `fname`))
		manifest.PipeE(kyaml.SetLabel("filenameAnnotation", `fname`))

		combinedManifests = append(combinedManifests, manifest)
	}

	merged, err := kio.StringAll(combinedManifests)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(merged))
}
