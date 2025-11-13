package main

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"test/apps"

	"github.com/ServiceWeaver/weaver"
	"github.com/gin-gonic/gin"
	"go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp"
)

func main() {
	engine := gin.New()
	os.Setenv("SERVICEWEAVER_CONFIG", "weaver.toml") // debug
	weaver.Run(context.Background(), func(ctx context.Context, app *apps.App) error {
		engine.Handle("GET", "/", func(c *gin.Context) {
			user, _ := app.UserService.Get().GetUser(context.TODO())
			c.JSON(200, gin.H{
				"data": user,
			})
		})
		fmt.Println("Listening on :", app.MainHttp.Addr())
		otelHandler := otelhttp.NewHandler(engine, "app")
		http.Serve(app.MainHttp.Listener, otelHandler)
		return nil
	})
}
