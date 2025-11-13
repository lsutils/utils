package main

import (
	"bufio"
	"fmt"
	"io"
	"log"
	"net"
	"os"
	"syscall"
)

func main() {
	var (
		family     = syscall.AF_INET
		sotype     = syscall.SOCK_STREAM
		_          = "tcp"
		serverip   = net.IPv4(0, 0, 0, 0)
		serverport = 8080
	)

	// 创建套接字
	sockfd, err := syscall.Socket(family, sotype, 0)
	if err != nil {
		panic(fmt.Errorf("fails to create socket: %s", err))
	}

	defer syscall.Close(sockfd)

	serverAddr, err := ipToSockaddrInet4(serverip, serverport)
	if err != nil {
		panic(fmt.Sprintf("fails to convert address %s:%d to socket addr, err=%v", serverip, serverport, err))
	}

	if err := syscall.Connect(sockfd, &serverAddr); err != nil {
		panic(fmt.Errorf("fails to connect sockfd %d to server, err=%v\n", sockfd, err))
	}

	reader := bufio.NewReader(os.Stdin)
	readBuf := make([]byte, 1024)

	for {
		dataBytes, err := reader.ReadBytes('\n')

		if err == io.EOF { // keyboard signal: CTRL-D
			log.Printf("Client exits gracefully!!!\n")
			return
		} else if err != nil {
			log.Printf("read error %v, shall exit\n", err)
			return
		} else {
			nWrite, err := syscall.Write(sockfd, dataBytes)
			if err != nil {
				log.Printf("write sockfd %d fails, error=%#v\n", sockfd, err)
				return
			} else {
				log.Printf("write %d bytes\n", nWrite)
			}

			nRead, err := syscall.Read(sockfd, readBuf[:])
			if err != nil {
				log.Printf("read sockfd %d fails, error=%#v\n", sockfd, err)
				return
			} else {
				log.Printf("read %d bytes, data=%s\n", nRead, readBuf[:nRead])
			}
		}
	}
}
func ipToSockaddrInet4(ip net.IP, port int) (syscall.SockaddrInet4, error) {
	if len(ip) == 0 {
		ip = net.IPv4zero
	}
	ip4 := ip.To4()
	if ip4 == nil {
		return syscall.SockaddrInet4{}, &net.AddrError{Err: "non-IPv4 address", Addr: ip.String()}
	}
	sa := syscall.SockaddrInet4{Port: port}
	copy(sa.Addr[:], ip4)
	return sa, nil
}
