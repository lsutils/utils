package compents

import (
	"fmt"
	"io"
	"net"
	"net/http"
	"os"
	"syscall"

	"github.com/gin-gonic/gin"
)

func Upload() {

	r := gin.Default()
	r.POST("/", func(c *gin.Context) {
		file, header, _ := c.Request.FormFile("file")
		openFile, _ := os.OpenFile(fmt.Sprintf("./%s", header.Filename), os.O_RDWR|os.O_CREATE, 0600)
		block := header.Size / 5
		index := 0
		for {
			buf := make([]byte, block)
			n, err := file.Read(buf)
			if err != nil && err != io.EOF {
				fmt.Println(err.Error())
				break
			}
			if n == 0 {
				break
			}
			openFile.Write(buf)
			index += 1
		}
	})
	HttpServer(r)
}
func HttpServer(r *gin.Engine) {
	fd, err := syscall.Socket(syscall.AF_INET, syscall.SOCK_STREAM, 0)
	if err != nil {
		fmt.Println("socket init error", err.Error())
		return
	}
	defer syscall.Close(fd)

	err = syscall.SetsockoptInt(fd, syscall.SOL_SOCKET, syscall.SO_REUSEADDR, 1)
	if err != nil {
		fmt.Println("set socket reuse error", err.Error())
		return
	}
	err = syscall.SetsockoptInt(fd, syscall.SOL_SOCKET, syscall.SO_RCVBUF, 1024)
	if err != nil {
		fmt.Println("set socket error", err.Error())
		return
	}
	err = syscall.SetsockoptInt(fd, syscall.SOL_SOCKET, syscall.SO_SNDBUF, 1024)
	if err != nil {
		fmt.Println("set socket error", err.Error())
		return
	}
	sa := &syscall.SockaddrInet4{
		Port: 8081,
	}
	copy(sa.Addr[:], net.IPv4(0, 0, 0, 0))
	err = syscall.Bind(fd, sa)

	if err != nil {
		fmt.Println("bind error", err.Error())
		return
	}

	f := os.NewFile(uintptr(fd), "")
	listener, err := net.FileListener(f)

	if err != nil {
		fmt.Println("listener error", err.Error())
		return
	}
	defer f.Close()
	defer listener.Close()
	err = syscall.Listen(fd, 0)

	if err != nil {
		fmt.Println("listen failed", err.Error())
		return
	}
	vv, _ := syscall.GetsockoptInt(fd, syscall.SOL_SOCKET, syscall.SO_RCVBUF)
	fmt.Println(vv)
	http.Serve(listener, r)
}
