install-k8s-by-kind.sh --name koord --version v1.28.0 --nodes 2

make deploy
kubectl apply -f APP-META/docker-config/job/config/mutating.yaml
echo "apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: kruise-local
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: kruise-manager
  namespace: kruise-system
" | kubectl apply -f -


kubectl patch daemonset kruise-daemon -n kruise-system -p '{"spec":{"template":{"spec":{"containers":[{"name":"daemon","imagePullPolicy":"IfNotPresent"}]}}}}'
docker pull ccr.ccs.tencentyun.com/ls-2018/mygo:v1.25.1
k8s-kind-load-image --image=ccr.ccs.tencentyun.com/ls-2018/mygo:v1.25.1 --node=koord-control-plane
#docker build -t openkruise/kruise-manager:test .
#k8s-kind-load-image --image=openkruise/kruise-manager:test