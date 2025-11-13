go install github.com/ServiceWeaver/weaver/cmd/weaver@latest
go install github.com/ServiceWeaver/weaver-kube/cmd/weaver-kube@latest

weaver generate ./...

CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o ./bin/myapp ./cmd

weaver kube deploy config.yaml

