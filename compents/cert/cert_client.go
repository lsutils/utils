package main

import (
	"crypto/tls"
	"crypto/x509"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func main() {
	pool := x509.NewCertPool()
	caCrt, err := ioutil.ReadFile("./test/ingress/ca.crt")
	if err != nil {
		log.Fatal(err)
	}
	pool.AppendCertsFromPEM(caCrt)
	cliCrt, err := tls.LoadX509KeyPair("./test/ingress/client.crt", "./test/ingress/client.key")
	if err != nil {
		log.Fatal(err)
	}
	tr := &http.Transport{
		TLSClientConfig: &tls.Config{
			RootCAs:      pool,
			Certificates: []tls.Certificate{cliCrt},
		},
	}
	req, err := http.NewRequest("GET", "https://gin.jtthink.com/", nil)
	if err != nil {
		log.Fatal(err)
	}

	client := &http.Client{Transport: tr}
	rsp, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer rsp.Body.Close()
	b, _ := ioutil.ReadAll(rsp.Body)
	fmt.Println(string(b))

}
