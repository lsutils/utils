
FROM ccr.ccs.tencentyun.com/ls-2018/mygo:v1.25.1 AS builder
ENV GOPRIVATE=*gitlab.alibaba-inc.com

WORKDIR /workspace
COPY . .

RUN --mount=type=cache,target=/root/.cache/go-build,id=go-build \
    --mount=type=cache,target=/go/pkg/mod,id=go-mod \
    CGO_ENABLED=0 GO111MODULE=on go build -o manager main.go \
  && CGO_ENABLED=0 GO111MODULE=on go build -o daemon ./cmd/daemon/main.go

FROM ccr.ccs.tencentyun.com/ls-2018/mygo:v1.25.1

WORKDIR /
COPY --from=builder /workspace/manager .
COPY --from=builder /workspace/daemon ./kruise-daemon

ENTRYPOINT ["/manager"]
# DOCKER_BUILDKIT=1 docker build -t openkruise/kruise-manager:test .