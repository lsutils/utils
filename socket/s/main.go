package main

import (
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"
	"syscall"
)

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

func echo(sockfd int) {
	defer func() {
		if err := syscall.Close(sockfd); err != nil {
			log.Printf("[echo] close sock %v fails, err=%v\n", sockfd, err)
		}
	}()
	var buf [32 * 1024]byte
	for {
		nRead, err := syscall.Read(sockfd, buf[:])
		if err != nil {
			log.Printf("fails to read data from sockfd %d, err=%v\n", sockfd, err)
			return
		}

		if _, err := syscall.Write(sockfd, buf[:nRead]); err != nil {
			log.Printf("fails to write data %s into sockfd %d, err=%v\n", buf[:nRead], sockfd, err)
			return
		}
	}
}

func main() {
	var (
		family        = syscall.AF_INET
		sotype        = syscall.SOCK_STREAM
		_             = "tcp"
		listenBacklog = syscall.SOMAXCONN
		serverip      = net.IPv4(0, 0, 0, 0)
		serverport    = 8080
	)

	// 创建套接字
	sockfd, err := syscall.Socket(family, sotype, 0)
	if err != nil {
		panic(fmt.Errorf("fails to create socket: %s", err))
	}

	syscall.CloseOnExec(sockfd)

	// Nonblock 处理起来太复杂了，先注释掉这一段
	// if err := syscall.SetNonblock(sockfd, true); err != nil {
	//   syscall.Close(sockfd)
	//   log.Printf("setnonblock error=%v\n", err)
	//   os.Exit(-1)
	// }

	// 接收到Ctrl+C信号后，关闭socket
	c := make(chan os.Signal)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		log.Println("\r- Ctrl+C pressed in Terminal")

		if err := syscall.Close(sockfd); err != nil {
			log.Printf("Close sockfd %d fails, err=%v\n", sockfd, err)
		} else {
			log.Printf("Server stopped successfully!!!")
		}
		// 收到信号后需要处理, 否则程序会永久hang住, 需要kill -9 <pid>
		// os.Exit 会导致所有goroutine都会立即停止执行
		os.Exit(0)
	}()

	addr, err := ipToSockaddrInet4(serverip, serverport)
	if err != nil {
		panic(fmt.Sprintf("fails to convert address %s:%d to socket addr, err=%s", serverip, serverport, err))
	}

	if err := syscall.Bind(sockfd, &addr); err != nil {
		panic(fmt.Sprintf("fails to bind socket %d to address %s:%d, err=%s",
			sockfd,
			serverip, serverport,
			err))
	}

	if err := syscall.Listen(sockfd, listenBacklog); err != nil {
		log.Printf("listen sockfd %d to addr error=%v\n", sockfd, err)
		panic(fmt.Sprintf("fails to listen socket %d", sockfd))
	} else {
		log.Printf("Started listening on %s:%d", serverip, serverport)
	}

	for {
		clientSockfd, clientSockAddr, err := syscall.Accept(sockfd)
		if err != nil {
			log.Printf("accept sockfd %d error=%v\n", sockfd, err)
			continue
		}
		clientSockAddrInet4 := clientSockAddr.(*syscall.SockaddrInet4)
		log.Printf("Connected with new client, sock addr = %v:%d\n", clientSockAddrInet4.Addr, clientSockAddrInet4.Port)
		go echo(clientSockfd)
	}
}
