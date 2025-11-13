package main

import "testing"

type PatchType string

const (
	JSONPatchType           PatchType = "application/json-patch+json"
	MergePatchType          PatchType = "application/merge-patch+json"
	StrategicMergePatchType PatchType = "application/strategic-merge-patch+json"
	ApplyPatchType          PatchType = "application/apply-patch+yaml"
)

func TestS(t *testing.T) {
	MergerPatch()
	//JsonPatch() // [{add /spec/containers/1 map[image:centos:8 name:t2 resources:map[]]}]
}
