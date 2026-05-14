package main

import (
	"context"
	"os"

	kdmv1alpha1 "gitlab.alibaba-inc.com/cos/kdm/pkg/apis/alibabacloud.com/v1alpha1"
	k8stypes "k8s.io/apimachinery/pkg/types"
	"k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/tools/clientcmd"
	controllerruntimeclient "sigs.k8s.io/controller-runtime/pkg/client"
	ctrlclient "sigs.k8s.io/controller-runtime/pkg/client"
)

func main() {
	kdmv1alpha1.AddToScheme(scheme.Scheme)
	config, _ := clientcmd.BuildConfigFromFlags("", os.Getenv("HOME")+"/.kube/kind-koord")
	controllerRuntimeClient, err := controllerruntimeclient.New(config, controllerruntimeclient.Options{Scheme: scheme.Scheme})
	if err != nil {
		panic(err)
	}
	deploy := &kdmv1alpha1.Cluster{}
	key := ctrlclient.ObjectKey{Namespace: `default`, Name: `kubernetes-cluster`}

	err = controllerRuntimeClient.Get(context.Background(), key, deploy)
	if err != nil {
		panic(err)
	}

	//	err = controllerRuntimeClient.Patch(context.Background(), deploy, ctrlclient.RawPatch(k8stypes.MergePatchType, []byte(`{
	//  "spec" : {
	//    "kubernetes" : {
	//      "kcm" : {
	//        "options" : {
	//          "resources" : {
	//            "requests" : {
	//              "cpu" : "1"
	//            }
	//          }
	//        }
	//      }
	//    }
	//  }
	//}`)))
	err = controllerRuntimeClient.Patch(context.Background(), deploy, ctrlclient.RawPatch(k8stypes.MergePatchType, []byte(`{
  "spec" : {
    "kubernetes" : {
      "kcm" : {
        "options" : {
          "resources" : {
            "manager" : {
              "requests" : {
                "cpu" : "1"
              }
            }
          }
        }
      }
    }
  }
}`)))
	if err != nil {
		panic(err)
	}
}
