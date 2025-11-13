CGO_ENABLED=0 GOOS=darwin  GOARCH=amd64 go build -o k8s-surplus-amd64-darwin  .
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -o k8s-surplus-amd64-windows .
CGO_ENABLED=0 GOOS=linux   GOARCH=amd64 go build -o k8s-surplus-amd64-linux   .

CGO_ENABLED=0 GOOS=darwin  GOARCH=arm64 go build -o k8s-surplus-arm64-darwin  .
CGO_ENABLED=0 GOOS=windows GOARCH=arm64 go build -o k8s-surplus-arm64-windows .
CGO_ENABLED=0 GOOS=linux   GOARCH=arm64 go build -o k8s-surplus-arm64-linux   .

