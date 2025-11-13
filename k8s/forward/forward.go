package forward

import (
	"fmt"
	"net"
	"os"

	uuid "github.com/satori/go.uuid"
)

func main() {
	RunProxy("127.0.0.1:8012", "127.0.0.1:8011")
}
func RunProxy(bind, backend string) (bool, error) {
	listener, err := net.Listen("tcp", bind)
	if err != nil {
		return false, err
	}
	defer listener.Close()
	for {
		conn, err := listener.Accept()
		if err != nil {
		} else {
			go ConnectionHandler(conn, backend)
		}
	}
}

func ConnectionHandler(conn net.Conn, backend string) {
	target, err := net.Dial("tcp", backend)
	defer conn.Close()
	if err != nil {
	} else {
		defer target.Close()
		closed := make(chan bool, 2)
		s := uuid.NewV4().String()
		fmt.Println(s)
		go Proxy(s, "send", conn, target, closed)
		go Proxy(s, "recv", target, conn, closed)
		<-closed
	}
}

func Proxy(id, c string, from net.Conn, to net.Conn, closed chan bool) {
	f, _ := os.Create(fmt.Sprintf("%s-%s.txt", id, c))
	buffer := make([]byte, 4096)
	for {

		n1, err := from.Read(buffer)
		f.Write(buffer[:n1])
		if err != nil {
			closed <- true
			return
		}
		_, err = to.Write(buffer[:n1])
		if err != nil {
			closed <- true
			return
		}
	}
}
