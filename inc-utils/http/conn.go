package http

import (
	"io"
	"net/http"
	"sync"
)

func main() {

}

func hijack(endpoint string, w http.ResponseWriter, r *http.Request) {
	hj, ok := w.(http.Hijacker)
	if !ok {
		return
	}

	fConn, bufrw, err := hj.Hijack()
	if err != nil {
		return
	}
	defer fConn.Close()

	var wg = sync.WaitGroup{}
	wg.Add(2)
	bufferedReader := io.LimitReader(bufrw, int64(bufrw.Reader.Buffered()))
	mr := io.MultiReader(bufferedReader, fConn)
	copy := func(dst io.Writer, src io.Reader) {
		defer wg.Done()
		io.Copy(dst, src)
	}

	_ = mr
	_ = copy
	wg.Wait()
}
