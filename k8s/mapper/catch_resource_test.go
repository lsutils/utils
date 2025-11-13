package main

import (
	"fmt"
	"testing"

	"github.com/lsutils/utils/k8s/helper"
	"k8s.io/apimachinery/pkg/api/meta"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/client-go/restmapper"
)

func TestCatchResources(t *testing.T) {
	c := helper.NewK8sConfig().InitDiscoveryClient()
	//c := helper.NewK8sConfig().InitClient().Discovery()
	gr, _ := restmapper.GetAPIGroupResources(c)
	restMapper := restmapper.NewDiscoveryRESTMapper(gr)
	mapping, _ := restMapper.RESTMapping(schema.GroupKind{
		Group: "aps.datacanvas.com",
		Kind:  "Tenant",
	})
	println(mapping.Resource.Resource)
}

func TestClusterResource(t *testing.T) {
	c := helper.NewK8sConfig().InitDiscoveryClient()
	//c := helper.NewK8sConfig().InitClient().Discovery()
	gr, _ := restmapper.GetAPIGroupResources(c)
	restMapper := restmapper.NewDiscoveryRESTMapper(gr)
	// 检查资源是否是集群资源
	res := schema.GroupKind{
		Group: "",
		Kind:  "Node",
	}

	for _ = range [102]int{} {
		isClusterResource := isClusterResource(restMapper, res)
		fmt.Printf("%s is a cluster resource: %t\n", res, isClusterResource)
	}
}

// 判断资源是否是集群资源
func isClusterResource(mapper meta.RESTMapper, resourceName schema.GroupKind) bool {
	// 获取资源到组和版本的映射关系
	mapping, err := mapper.RESTMapping(resourceName)
	if err != nil {
		fmt.Printf("Error getting mapping for resource %s: %v\n", resourceName, err)
		return false
	}

	// 判断资源是否是集群资源
	return mapping.Scope.Name() == meta.RESTScopeNameRoot
}
