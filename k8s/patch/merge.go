package main

import (
	"fmt"

	applypatch "github.com/evanphx/json-patch"
)

func MergerPatch() {
	end := []byte(`{
		"metadata": {
			"name": "foo",
			"labels": {
				"app": "bar"
			}
		},
		"spec": {
			"replicas": 3,
			"image": "nginx:latest"
		}
	}`)
	patch := []byte(`{"metadata":{"namespace":"1"}}`)

	original := []byte(`{
		"metadata": {
			"labels": {
				"app": "baz"
			}
		},
		"spec": {
			"replicas": 5
		}
	}`)
	mergePatch, _ := applypatch.MergePatch(original, patch)
	fmt.Println(string(mergePatch))
	createMergePatch, _ := applypatch.CreateMergePatch(original, mergePatch)
	fmt.Println(string(createMergePatch))

	_ = end
}
