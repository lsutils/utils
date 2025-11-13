package proxy

import (
	"time"

	"github.com/valyala/fasthttp"
	proxy "github.com/yeqown/fasthttp-reverse-proxy/v2"
)

func ProxyHandler(ctx *fasthttp.RequestCtx) {
	jtthink.ServeHTTP(ctx)
	//ctx.Response.Add("myname", "shenyi")
}

var jtthink = proxy.NewReverseProxy("www.jtthink.com",
	proxy.WithTimeout(time.Second*5),
	//proxy.WithBalancer(),
)

func main() {

	//http.ListenAndServe()
	fasthttp.ListenAndServe(":80", ProxyHandler)
}
