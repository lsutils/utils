package lib

import (
	"bytes"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CheckLogin() gin.HandlerFunc {
	return func(context *gin.Context) {
		if context.Request.Header.Get("token") == "" {
			context.AbortWithStatusJSON(400, gin.H{"message": "token required"})
		} else {
			context.Set("user_name", context.Request.Header.Get("token"))
			context.Next()
		}
	}
}

func RBAC() gin.HandlerFunc {
	err := E.LoadPolicy()
	if err != nil {
		log.Fatal()
	}
	return func(context *gin.Context) {
		user, _ := context.Get("user_name")
		access, err := E.Enforce(user, context.Request.RequestURI, context.Request.Method)
		if err != nil || !access {
			context.AbortWithStatusJSON(403, gin.H{"message": "forbidden"})
		} else {
			context.Next()
		}
	}
}
func Middlewares() (fs []gin.HandlerFunc) {
	fs = append(fs, CheckLogin(), RBAC())
	return
}

// Avoid a large file from loading into memory
// If the file size is greater than 8MB dont allow it to even load into memory and waste our time.
func MaxSizeAllowed(n int64) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Request.Body = http.MaxBytesReader(c.Writer, c.Request.Body, n)
		buff, errRead := c.GetRawData()
		if errRead != nil {
			//c.JSON(http.StatusRequestEntityTooLarge,"too large")
			c.JSON(http.StatusRequestEntityTooLarge, gin.H{
				"status":     http.StatusRequestEntityTooLarge,
				"upload_err": "too large: upload an image less than 8MB",
			})
			c.Abort()
			return
		}
		buf := bytes.NewBuffer(buff)
		c.Request.Body = ioutil.NopCloser(buf)
	}
}
