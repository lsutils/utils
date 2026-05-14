#!/bin/bash

# Proxy 测试环境搭建脚本
# 功能：创建 Kind 集群，生成证书，启动代理服务，并通过 kubectl 验证

set -e

# 颜色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Proxy 测试环境搭建 ===${NC}"

ps -ef |grep 'go test'|grep -v grep|awk -F ' ' '{print $2}'|xargs kill -9

# 1. 检查依赖
check_dependencies() {
    echo -e "${YELLOW}[1/6] 检查依赖...${NC}"

    for cmd in kind kubectl openssl go; do
        if ! command -v $cmd &> /dev/null; then
            echo -e "${RED}错误: 未找到 $cmd，请先安装${NC}"
            exit 1
        fi
    done

    echo -e "${GREEN}✓ 所有依赖已安装${NC}"
}

# 2. 创建证书目录
setup_cert_dir() {
    echo -e "${YELLOW}[2/6] 创建证书目录...${NC}"

    CERT_DIR="/tmp/test"
    mkdir -p $CERT_DIR

    echo -e "${GREEN}✓ 证书目录: $CERT_DIR${NC}"
}

# 3. 创建 Kind 集群（优先生成，以便获取 CA 证书）
create_kind_cluster() {
    echo -e "${YELLOW}[3/7] 创建 Kind 集群...${NC}"

    CLUSTER_NAME="proxy-test"

    # 删除已存在的集群
    if kind get clusters | grep -q $CLUSTER_NAME; then
        echo -e "${YELLOW}删除已存在的集群: $CLUSTER_NAME${NC}"
        kind delete cluster --name $CLUSTER_NAME
    fi

    # 创建 Kind 集群配置
    cat > /tmp/kind-config.yaml <<EOF
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
name: ${CLUSTER_NAME}
networking:
  apiServerAddress: "127.0.0.1"
  apiServerPort: 16443
EOF

    # 创建集群
    kind create cluster --config /tmp/kind-config.yaml --image ccr.ccs.tencentyun.com/acejilam/ib-agd469misz:6a964cbfc6b9347d2a411584c8d78eaa-v1.34.0

    # 导出 kubeconfig
    kind export kubeconfig --name $CLUSTER_NAME --kubeconfig /tmp/kind-kubeconfig

    echo -e "${GREEN}✓ Kind 集群已创建: $CLUSTER_NAME${NC}"
    echo -e "${GREEN}✓ API Server 地址: https://127.0.0.1:16443${NC}"
}

# 4. 从 Kind Docker 容器提取 CA 证书和私钥
extract_kind_ca() {
    echo -e "${YELLOW}[4/7] 从 Kind Docker 容器提取 CA 证书...${NC}"

    CERT_DIR="/tmp/test"
    CLUSTER_NAME="proxy-test"

    # 获取 Kind 控制平面容器名称
    CONTAINER_NAME="${CLUSTER_NAME}-control-plane"

    # 从容器中拷贝 CA 证书和私钥
    docker cp ${CONTAINER_NAME}:/etc/kubernetes/pki/ca.crt $CERT_DIR/ca.pem
    docker cp ${CONTAINER_NAME}:/etc/kubernetes/pki/ca.key $CERT_DIR/ca-key.pem

    if [ ! -f "$CERT_DIR/ca.pem" ] || [ ! -f "$CERT_DIR/ca-key.pem" ]; then
        echo -e "${RED}错误: 无法从 Kind 容器提取 CA 证书${NC}"
        exit 1
    fi

    echo -e "${GREEN}✓ CA 证书和私钥已从 Kind 容器提取${NC}"
    echo -e "${GREEN}  CA 证书: $CERT_DIR/ca.pem${NC}"
    echo -e "${GREEN}  CA 私钥: $CERT_DIR/ca-key.pem${NC}"
}

# 5. 使用 Kind CA 签发服务器证书
generate_server_cert() {
    echo -e "${YELLOW}[5/7] 生成服务器证书（使用 Kind CA 签发）...${NC}"

    CERT_DIR="/tmp/test"

    # 生成服务器私钥
    openssl genrsa -out $CERT_DIR/server-key.pem 2048

    # 创建服务器证书签名请求配置（包含 SAN）
    cat > $CERT_DIR/server.cnf <<EOF
[req]
req_extensions = v3_req
distinguished_name = req_distinguished_name

[req_distinguished_name]

[v3_req]
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost
IP.1 = 127.0.0.1
IP.2 = 0.0.0.0
EOF

    # 生成服务器 CSR
    openssl req -new -key $CERT_DIR/server-key.pem -out $CERT_DIR/server.csr \
        -subj "/C=CN/ST=Zhejiang/L=Hangzhou/O=Dc/OU=Proxy/CN=k8s-proxy" \
        -config $CERT_DIR/server.cnf

    # 使用 Kind CA 签发服务器证书（包含 SAN 扩展）
    openssl x509 -req -in $CERT_DIR/server.csr -CA $CERT_DIR/ca.pem -CAkey $CERT_DIR/ca-key.pem \
        -CAcreateserial -out $CERT_DIR/server-cert.pem -days 3650 \
        -extensions v3_req -extfile $CERT_DIR/server.cnf

    echo -e "${GREEN}✓ 服务器证书已生成（由 Kind CA 签发）${NC}"
}

# 6. 使用 Kind CA 签发客户端证书
generate_client_cert() {
    echo -e "${YELLOW}[6/7] 生成客户端证书（使用 Kind CA 签发）...${NC}"

    CERT_DIR="/tmp/test"
    CLUSTER_ID="test-cluster"

    # 生成客户端私钥
    openssl genrsa -out $CERT_DIR/client-key.pem 2048

    # 生成客户端 CSR（OU 字段设置为集群 ID）
    openssl req -new -key $CERT_DIR/client-key.pem -out $CERT_DIR/client.csr \
        -subj "/C=CN/ST=Zhejiang/L=Hangzhou/O=Dc/OU=${CLUSTER_ID}/CN=k8s-proxy"

    # 使用 Kind CA 签发客户端证书
    openssl x509 -req -in $CERT_DIR/client.csr -CA $CERT_DIR/ca.pem -CAkey $CERT_DIR/ca-key.pem \
        -CAcreateserial -out $CERT_DIR/client.pem -days 3650

    echo -e "${GREEN}✓ 客户端证书已生成（由 Kind CA 签发，OU=${CLUSTER_ID}）${NC}"
}

# 7. 启动代理服务
start_proxy_server() {
    echo -e "${YELLOW}[7/7] 启动代理服务...${NC}"

    # 设置环境变量指向 kind 集群的 kubeconfig
    export KUBECONFIG_PATH=/tmp/kind-kubeconfig

    # 在后台启动代理服务
    go run . > /tmp/proxy.log 2>&1 &
    PROXY_PID=$!

    echo -e "${GREEN}✓ 代理服务已启动 (PID: $PROXY_PID)${NC}"
    echo -e "${GREEN}✓ 代理地址: https://127.0.0.1:13003${NC}"

    # 等待代理启动
    sleep 5

    # 检查代理是否正常运行
    if kill -0 $PROXY_PID 2>/dev/null; then
        echo -e "${GREEN}✓ 代理服务运行正常${NC}"
    else
        echo -e "${RED}✗ 代理服务启动失败，查看日志: /tmp/proxy.log${NC}"
        cat /tmp/proxy.log
        exit 1
    fi

    # 保存 PID 以便后续清理
    echo $PROXY_PID > /tmp/proxy.pid
}

# 8. 创建代理 kubeconfig
create_proxy_kubeconfig() {
    echo -e "${YELLOW}创建代理 kubeconfig...${NC}"

    CERT_DIR="/tmp/test"
    PROXY_URL="https://localhost:13003"

    # 创建使用代理的 kubeconfig
    # 注意：使用 --insecure-skip-tls-verify 因为服务器证书 CN=localhost 但访问的是 127.0.0.1
    kubectl config set-cluster proxy-proxy \
        --server=https://127.0.0.1:13003 \
        --insecure-skip-tls-verify=true \
        --kubeconfig=/tmp/kubeconfig-proxy.yaml

    kubectl config set-credentials proxy-user \
        --client-certificate=$CERT_DIR/client.pem \
        --client-key=$CERT_DIR/client-key.pem \
        --kubeconfig=/tmp/kubeconfig-proxy.yaml

    kubectl config set-context proxy-proxy \
        --cluster=proxy-proxy \
        --user=proxy-user \
        --kubeconfig=/tmp/kubeconfig-proxy.yaml

    kubectl config use-context proxy --kubeconfig=/tmp/kubeconfig-proxy.yaml

    echo -e "${GREEN}✓ 代理 kubeconfig 已创建: /tmp/kubeconfig-proxy.yaml${NC}"
}

# 9. 创建 RBAC 权限绑定
setup_rbac() {
    echo -e "${YELLOW}创建 RBAC 权限绑定...${NC}"

    # 使用 Kind 集群的 kubeconfig 创建 ClusterRoleBinding
    # 授予 kubectl-user cluster-admin 权限
    kubectl --kubeconfig=/tmp/kind-kubeconfig create clusterrolebinding proxy-admin-binding \
        --clusterrole=cluster-admin \
        --user=k8s-proxy \
        --dry-run=client -o yaml | kubectl --kubeconfig=/tmp/kind-kubeconfig apply -f -

    echo -e "${GREEN}✓ RBAC 权限已创建${NC}"

    # 等待权限生效
    sleep 2
}

# 10. 测试代理
test_proxy() {
    echo -e "${YELLOW}测试代理连接...${NC}"

    # 使用代理 kubeconfig 访问集群
    echo -e "${YELLOW}执行: kubectl --kubeconfig=/tmp/kubeconfig-proxy.yaml get pods -A${NC}"

    if kubectl --kubeconfig=/tmp/kubeconfig-proxy.yaml get pods -A; then
        echo -e "${GREEN}✓ 代理测试成功！${NC}"
        echo -e "${GREEN}你可以通过以下命令访问集群：${NC}"
        echo -e "  ${YELLOW}kubectl --kubeconfig=/tmp/kubeconfig-proxy.yaml get nodes${NC}"
        echo -e "  ${YELLOW}kubectl --kubeconfig=/tmp/kubeconfig-proxy.yaml get pods -A${NC}"
        echo -e "  ${YELLOW}kubectl --kubeconfig=/tmp/kubeconfig-proxy.yaml exec -it <pod> -- sh${NC}"
        return 0
    else
        echo -e "${RED}✗ 代理测试失败${NC}"
        return 1
    fi
}

# 11. 清理环境
cleanup() {
    echo -e "${YELLOW}清理环境...${NC}"

    # 停止代理服务
    if [ -f /tmp/proxy.pid ]; then
        PROXY_PID=$(cat /tmp/proxy.pid)
        kill $PROXY_PID 2>/dev/null || true
        rm -f /tmp/proxy.pid
        echo -e "${GREEN}✓ 代理服务已停止${NC}"
    fi
    # 删除 Kind 集群
    sleep 1d
    kind delete cluster --name proxy-test 2>/dev/null || true
    echo -e "${GREEN}✓ Kind 集群已删除${NC}"

    # 清理证书文件
    rm -rf /tmp/test
    rm -f /tmp/kind-config.yaml /tmp/kind-kubeconfig /tmp/kubeconfig-proxy.yaml
    echo -e "${GREEN}✓ 证书和配置文件已清理${NC}"
}

# 主函数
main() {
    # 如果第一个参数是 cleanup，则执行清理
    if [ "$1" == "cleanup" ]; then
        cleanup
        exit 0
    fi

    # 执行完整流程
    check_dependencies
    setup_cert_dir
    create_kind_cluster           # 先创建 Kind 集群
    extract_kind_ca               # 提取 Kind 的 CA 证书
    generate_server_cert          # 生成服务器证书
    generate_client_cert          # 生成/提取客户端证书
    start_proxy_server            # 启动代理服务
    create_proxy_kubeconfig       # 创建代理 kubeconfig
    setup_rbac                    # 创建 RBAC 权限

    echo -e "${GREEN}"
    echo -e "========================================"
    echo -e "  测试环境已就绪！"
    echo -e "========================================"
    echo -e "${NC}"
    echo -e "代理地址: ${YELLOW}https://localhost:13003${NC}"
    echo -e "代理 kubeconfig: ${YELLOW}/tmp/kubeconfig-proxy.yaml${NC}"
    echo -e "Kind 集群 kubeconfig: ${YELLOW}/tmp/kind-kubeconfig${NC}"
    echo -e ""
    echo -e "${GREEN}测试代理连接...${NC}"

    # 等待代理完全启动
    sleep 2

    # 测试代理
    if test_proxy; then
        echo -e "${GREEN}"
        echo -e "========================================"
        echo -e "  所有测试通过！✓"
        echo -e "========================================"
        echo -e "${NC}"
        echo -e "清理命令: ${YELLOW}./run.sh cleanup${NC}"
    else
        echo -e "${RED}"
        echo -e "========================================"
        echo -e "  测试失败 ✗"
        echo -e "========================================"
        echo -e "${NC}"
        cleanup
        exit 1
    fi
}

# 执行主函数
main "$@"