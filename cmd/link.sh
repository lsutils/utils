rm -rf k8s-aps-cap
mkdir -p k8s-aps-cap
rm -rf k8s-dynamic-plugin
mkdir -p k8s-dynamic-plugin
rm -rf k8s-mock-resources
mkdir -p k8s-mock-resources
rm -rf k8s-pod-state
mkdir -p k8s-pod-state
rm -rf k8s-container-sha
mkdir -p k8s-container-sha
rm -rf k8s-external-authentication
mkdir -p k8s-external-authentication
rm -rf k8s-node-cap
mkdir -p k8s-node-cap
rm -rf k8s-surplus
mkdir -p k8s-surplus
rm -rf k8s-controller-multiwatch
mkdir -p k8s-controller-multiwatch
rm -rf k8s-gvr-watch
mkdir -p k8s-gvr-watch
rm -rf k8s-parse
mkdir -p k8s-parse
rm -rf print-inner-repo
mkdir -p print-inner-repo
rm -rf trans-image-name
mkdir -p trans-image-name
rm -rf trans-image-name-reverse
mkdir -p trans-image-name-reverse

cd k8s-aps-cap && ln -s ../../k8s/cmd/k8s-aps-cap/main.go main.go && cd -
cd k8s-dynamic-plugin && ln -s ../../k8s/cmd/k8s-dynamic-plugin/main.go main.go && cd -
cd k8s-mock-resources && ln -s ../../k8s/cmd/k8s-mock-resources/main.go main.go && cd -
cd k8s-pod-state && ln -s ../../k8s/cmd/k8s-pod-state/main.go main.go && cd -
cd k8s-container-sha && ln -s ../../k8s/cmd/k8s-container-sha/main.go main.go && cd -
cd k8s-external-authentication && ln -s ../../k8s/cmd/k8s-external-authentication/main.go main.go && cd -
cd k8s-node-cap && ln -s ../../k8s/cmd/k8s-node-cap/main.go main.go && cd -
cd k8s-surplus && ln -s ../../k8s/cmd/k8s-surplus/main.go main.go && cd -
cd k8s-controller-multiwatch && ln -s ../../k8s/cmd/k8s-controller-multiwatch/main.go main.go && cd -
cd k8s-gvr-watch && ln -s ../../k8s/cmd/k8s-gvr-watch/main.go main.go && cd -
cd k8s-parse && ln -s ../../k8s/cmd/k8s-parse/main.go main.go && cd -
cd print-inner-repo && ln -s ../../sync/cmd/print-inner-repo/main.go main.go && cd -
cd trans-image-name && ln -s ../../sync/cmd/trans-image-name/main.go main.go && cd -
cd trans-image-name-reverse && ln -s ../../sync/cmd/trans-image-name-reverse/main.go main.go && cd -
