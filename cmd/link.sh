set -x

link_k8s() {
	repo=$1
	rm -rf $repo
	mkdir -p $repo
	cd $repo && ln -s ../../k8s/cmd/$repo/main.go main.go && cd -
}

link_sync() {
	repo=$1
	rm -rf $repo
	mkdir -p $repo
	cd $repo && ln -s ../../sync/cmd/$repo/main.go main.go && cd -
}

link_k8s k8s-aps-cap
link_k8s k8s-dynamic-plugin
link_k8s k8s-mock-resources
link_k8s k8s-pod-state
link_k8s k8s-container-sha
link_k8s k8s-external-authentication
link_k8s k8s-node-cap
link_k8s k8s-surplus
link_k8s k8s-controller-multiwatch
link_k8s k8s-gvr-watch
link_k8s k8s-parse
link_k8s k8s-kind-load-image

link_sync print-inner-repo
link_sync trans-image-name
link_sync trans-image-name-reverse
