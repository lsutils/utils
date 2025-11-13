package compents

import (
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/jpillora/overseer"
	uuid "github.com/satori/go.uuid"
)

var id = uuid.NewV4()

func main3() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		writer.Write([]byte("<h1>" + id.String() + "</h1>"))
	})
	mux.HandleFunc("/reload", func(writer http.ResponseWriter, request *http.Request) {
		id = uuid.NewV4()
		overseer.Restart()
	})

	server := &http.Server{
		Addr:    ":8899",
		Handler: mux,
	}

	prog := func(state overseer.State) {
		server.Serve(state.Listener)
	}

	errChan := make(chan error)
	go (func() {
		overseer.Run(overseer.Config{
			Program:          prog,
			TerminateTimeout: time.Second * 2,
			Address:          ":8090",
			Debug:            false,
		})
	})()

	//监听信号
	go (func() {
		sigC := make(chan os.Signal)
		signal.Notify(sigC, syscall.SIGINT, syscall.SIGTERM)
		errChan <- fmt.Errorf("%s", <-sigC)
	})()
	<-errChan
}
