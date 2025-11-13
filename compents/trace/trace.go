package main

import (
	"context"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/exporters/stdout/stdouttrace"
	"go.opentelemetry.io/otel/propagation"
	"go.opentelemetry.io/otel/sdk/resource"
	"go.opentelemetry.io/otel/sdk/trace"
	semconv "go.opentelemetry.io/otel/semconv/v1.11.0"
)

// NewStdoutExporter newExporter returns interview console exporter.
func NewStdoutExporter(w io.Writer) (trace.SpanExporter, error) {
	return stdouttrace.New(
		stdouttrace.WithWriter(w),
		// Use human-readable output.
		stdouttrace.WithPrettyPrint(),
		// Do not print timestamps for the demo.
		//stdouttrace.WithoutTimestamps(),
	)
}

// newResource returns interview resource describing this application.
// 资源  观测实体
func newResource() *resource.Resource {
	r, _ := resource.Merge(
		resource.Default(),
		resource.NewWithAttributes(
			semconv.SchemaURL,
			semconv.ServiceNameKey.String("fib"),
			semconv.ServiceVersionKey.String("v0.1.0"),
			attribute.String("environment", "demo"),
		),
	)
	return r
}

func NewProvider(w io.Writer) *trace.TracerProvider {
	exporter, err := NewStdoutExporter(w)
	if err != nil {
		log.Fatalln(exporter)
	}
	r := newResource()

	tp := trace.NewTracerProvider(
		trace.WithBatcher(exporter),
		trace.WithResource(r),
	)
	otel.SetTracerProvider(tp)
	return tp
}

var tracer = otel.Tracer("appName")

func mai2n() {
	file, _ := os.OpenFile("trace.txt", os.O_CREATE|os.O_TRUNC|os.O_RDWR, 0600)
	defer file.Close()
	provider := NewProvider(file) // 观测数据的生产者
	ctx, span := tracer.Start(context.Background(), "main")
	span.SetAttributes(semconv.HTTPAttributesFromHTTPStatusCode(200)...)
	span.End()
	provider.ForceFlush(context.Background())
	fmt.Println(ctx)
	time.Sleep(time.Second * 3)
}

func Middle(c *gin.Context) gin.HandlerFunc {
	var tracer = otel.Tracer("appName")
	return func(c *gin.Context) {
		// 需要把 Propagator 表头加到context中
		ctx := otel.GetTextMapPropagator().Extract(c.Request.Context(), propagation.HeaderCarrier(c.Request.Header))
		ctx, span := tracer.Start(context.Background(), "Middle")
		span.SetAttributes(semconv.HTTPAttributesFromHTTPStatusCode(200)...)
		span.End()
		c.Request = c.Request.WithContext(ctx)
		c.Next()
	}
}

func Req(c context.Context, reqUrl string) {
	fmt.Println(reqUrl)
	request, _ := http.NewRequest("get", reqUrl, nil)
	otel.GetTextMapPropagator().Inject(c, propagation.HeaderCarrier(request.Header))
	fmt.Println(request.Header)
	res, _ := http.DefaultClient.Do(request)
	fmt.Println(res)
}

func main() {
	Req(context.Background(), "https://www.baidu.com")
}
