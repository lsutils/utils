package main

import (
	"encoding/json"
	"fmt"

	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/util/mergepatch"
	"k8s.io/apimachinery/pkg/util/strategicpatch"
	"sigs.k8s.io/yaml"
)

func StrategicPatch() {
	original := []byte(`{
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

	patch := []byte(`{
		"metadata": {
			"labels": {
				"app": "baz"
			}
		},
		"spec": {
			"replicas": 5
		}
	}`)

	_ = `{
  "metadata": {
    "labels": {
      "app": "baz"
    },
    "name": "foo"
  },
  "spec": {
    "image": "nginx:latest",
    "replicas": 5
  }
}
`
	merged, _ := strategicpatch.StrategicMergePatch(original, patch, corev1.Pod{})

	fmt.Println(string(merged))
	patch, _ = strategicpatch.CreateTwoWayMergePatch(original, merged, &corev1.Pod{})
	fmt.Println(string(patch))
}

func patchHandleUnmarshal(j []byte, unmarshal func(data []byte, v any) error) (map[string]any, error) {
	if j == nil {
		j = []byte("{}")
	}

	m := map[string]any{}
	err := unmarshal(j, &m)
	if err != nil {
		return nil, mergepatch.ErrBadJSONDoc
	}
	return m, nil
}

func StrategicMergePatchYAML(originalJSON []byte, patchYAML []byte, dataStruct any) ([]byte, error) {
	schema, err := strategicpatch.NewPatchMetaFromStruct(dataStruct)
	if err != nil {
		return nil, err
	}

	originalMap, err := patchHandleUnmarshal(originalJSON, json.Unmarshal)
	if err != nil {
		return nil, err
	}
	patchMap, err := patchHandleUnmarshal(patchYAML, func(data []byte, v any) error {
		return yaml.Unmarshal(data, v)
	})
	if err != nil {
		return nil, err
	}

	result, err := strategicpatch.StrategicMergeMapPatchUsingLookupPatchMeta(originalMap, patchMap, schema)
	if err != nil {
		return nil, err
	}

	return json.Marshal(result)
}
