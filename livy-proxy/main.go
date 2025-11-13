package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net"
	"strconv"
	"strings"
	"time"

	uuid "github.com/satori/go.uuid"
)

var rules []RuleInterface

func main() {
	listener, err := net.Listen("tcp", "0.0.0.0:8012")
	if err != nil {
		log.Fatal(err)
	}
	defer listener.Close()
	for {
		conn, err := listener.Accept()
		if err != nil {
		} else {
			go ConnectionHandler(conn)
		}
	}
}

func ConnectionHandler(conn net.Conn) {
	defer conn.Close()
	closed := make(chan bool)
	s := uuid.NewV4().String()
	go Proxy(s, "send", conn, nil, closed)
	<-closed
}

func Proxy(id, identification string, from net.Conn, target net.Conn, closed chan bool) {
	defer fmt.Println(id, identification, "close")
	buffer := make([]byte, 4096)
	tmpBuf := make([]byte, 0, 121)
	count := 0
	for {
		select {
		default:
		case <-closed:
			return
		}
		n1, err := from.Read(buffer)
		count += 1
		//from.Write(buffer[:n1])
		if err != nil {

			Close(closed, target)
			return
		}
		// cache some data for parse
		if len(tmpBuf) < 100 && target == nil {
			tmpBuf = append(tmpBuf, buffer[:n1]...)
			buffer = make([]byte, 4096)
		}

		if target == nil {
			for _, r := range rules {
				if r.Compare(tmpBuf, count) {
					var forwardData []byte
					forwardData, target, err = r.UpdateTarget(target)
					if err != nil {
						fmt.Println(err.Error())
						Close(closed, target)
						return
					}
					fmt.Printf("\n收到链接: %s,类型 %s\n", id, r.Name())
					target.Write(forwardData)
					go func(close chan bool) {
						Proxy(id, "recv", target, from, close)
						Close(closed, target)
						target.Close()
					}(closed)
					break
				}
			}
		} else {
			_, err = target.Write(buffer[:n1])
			if err != nil {
				fmt.Println("连接关闭 Write", err.Error())
				Close(closed, target)
				return
			}
		}
	}

}

type DriverParse struct {
	data []byte
}

func (p *DriverParse) parse() string {
	Address := ""
	if p.data[0] == 1 {
		Address += string(p.data[3 : 3+p.data[2]])
		p.data = p.data[3+p.data[2]:]
		var port int32 = int32(p.data[0])<<24 | int32(p.data[1])<<16 | int32(p.data[2])<<8 | int32(p.data[3])<<0
		p.data = p.data[4:]
		Address += ":" + strconv.FormatInt(int64(port), 10)
	} else {
		p.data = p.data[1:]
	}
	fmt.Println("Address:-->", Address)
	return Address
}

func Close(ch chan bool, conn net.Conn) {
	// 在当前 goroutine 中判断 channel 是否已经关闭
	select {
	case _, ok := <-ch:
		if ok {
			// channel 未关闭
			close(ch)
		} else {
			// channel 已关闭
		}
	default:
		close(ch)
	}
	if conn != nil {
		conn.Close()
	}
}

type RuleInterface interface {
	Compare(tmpBuf []byte, revCount int) bool
	UpdateTarget(net.Conn) ([]byte, net.Conn, error)
	Name() string
}

type SparkOnYarnProxy struct {
	tmpBuf []byte
	conn   net.Conn
}

func (s *SparkOnYarnProxy) Name() string {
	return "SparkOnYarnProxy"
}

func (s *SparkOnYarnProxy) Compare(tmpBuf []byte, revCount int) bool {
	s.tmpBuf = tmpBuf
	if len(tmpBuf) > 100 && revCount == 2 {
		return true
	}
	return false
}

func (s *SparkOnYarnProxy) UpdateTarget(target net.Conn) ([]byte, net.Conn, error) {
	// spark yarn proxy
	p := DriverParse{s.tmpBuf[21:]}
	p.parse()
	driverUrl := p.parse()
	if len(driverUrl)-strings.Index(driverUrl, ":") > 5+1 {

		return nil, target, errors.New(fmt.Sprintf("driverUrl 无效:%s", driverUrl))
	}
	target, err := net.DialTimeout("tcp", driverUrl, time.Minute*30)
	if err != nil {
		return nil, target, errors.New(fmt.Sprintf("创建与driver的连接出错:%s", driverUrl))
	}
	s.conn = target

	return s.tmpBuf, target, nil
}

type LivyProxy struct {
	tmpBuf []byte
}

func (s *LivyProxy) Name() string {
	return "LivyProxy"
}

func (s *LivyProxy) Compare(tmpBuf []byte, revCount int) bool {
	s.tmpBuf = tmpBuf
	if len(tmpBuf) > 30 && revCount == 1 && string(tmpBuf[4]) == "{" {
		return true
	}
	return false
}

func (s *LivyProxy) UpdateTarget(target net.Conn) ([]byte, net.Conn, error) {
	dataLength := int32(s.tmpBuf[0])<<24 | int32(s.tmpBuf[1])<<16 | int32(s.tmpBuf[2])<<8 | int32(s.tmpBuf[3])<<0
	type IP struct {
		LauncherHost string `json:"LauncherHost"`
		LauncherPort int    `json:"LauncherPort"`
	}
	ip := new(IP)
	err := json.Unmarshal(s.tmpBuf[4:4+dataLength], ip)
	if err != nil {
		return nil, target, errors.New(fmt.Sprintf("解析json数据出错:%s", err.Error()))
	}
	target, err = net.DialTimeout("tcp", fmt.Sprintf("%s:%d", ip.LauncherHost, ip.LauncherPort), time.Minute*30)
	if err != nil {
		return nil, target, errors.New(fmt.Sprintf("创建与livy server的连接出错:%s", err.Error()))
	}
	return s.tmpBuf[4+dataLength:], target, nil
}

func init() {
	rules = append(rules, new(SparkOnYarnProxy))
	rules = append(rules, new(LivyProxy))
}
