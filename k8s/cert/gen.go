package main

import (
	"bufio"
	"context"
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rand"
	"crypto/tls"
	"crypto/x509"
	"crypto/x509/pkix"
	"encoding/pem"
	"errors"
	"fmt"
	"io"
	"math/big"
	"os"
	"strings"
	"sync"
	"time"

	"go.uber.org/zap"
	corev1 "k8s.io/api/core/v1"
)

var logger *zap.SugaredLogger

func init() {
	x, _ := zap.NewProduction()
	logger = x.Named("fallback").Sugar()
}

const (
	resolverFileName    = "/etc/resolv.conf"
	clusterDomainEnvKey = "CLUSTER_DOMAIN"
	defaultDomainName   = "cluster.local"
)
const (
	organization = "knative.dev"
)

var (
	domainName = defaultDomainName
	once       sync.Once
)

func getClusterDomainName(r io.Reader) string {
	// First look in the conf file.
	for scanner := bufio.NewScanner(r); scanner.Scan(); {
		elements := strings.Split(scanner.Text(), " ")
		if elements[0] != "search" {
			continue
		}
		for _, e := range elements[1:] {
			if strings.HasPrefix(e, "svc.") {
				return strings.TrimSuffix(e[4:], ".")
			}
		}
	}

	// Then look in the ENV.
	if domain := os.Getenv(clusterDomainEnvKey); len(domain) > 0 {
		return domain
	}

	// For all abnormal cases return default domain name.
	return defaultDomainName
}

// GetClusterDomainName returns cluster's domain name or an error
// Closes issue: https://github.com/knative/eventing/issues/714
func GetClusterDomainName() string {
	once.Do(func() {
		f, err := os.Open(resolverFileName)
		if err != nil {
			return
		}
		defer f.Close()
		domainName = getClusterDomainName(f)
	})
	return domainName
}

// GetServiceHostname returns the fully qualified service hostname
func GetServiceHostname(name, namespace string) string {
	return fmt.Sprintf("%s.%s.svc.%s", name, namespace, GetClusterDomainName())
}

// Create the common parts of the cert. These don't change between
// the root/CA cert and the server cert.
func createCertTemplate(name, namespace string, notAfter time.Time) (*x509.Certificate, error) {
	serialNumberLimit := new(big.Int).Lsh(big.NewInt(1), 128)
	serialNumber, err := rand.Int(rand.Reader, serialNumberLimit)
	if err != nil {
		return nil, errors.New("failed to generate serial number: " + err.Error())
	}

	serviceName := name + "." + namespace
	commonName := serviceName + ".svc"
	serviceHostname := GetServiceHostname(name, namespace)
	serviceNames := []string{
		name,
		serviceName,
		commonName,
		serviceHostname,
	}

	tmpl := x509.Certificate{
		SerialNumber: serialNumber,
		Subject: pkix.Name{
			Organization: []string{organization},
			CommonName:   commonName,
		},
		SignatureAlgorithm:    x509.ECDSAWithSHA256,
		NotBefore:             time.Now(),
		NotAfter:              notAfter,
		BasicConstraintsValid: true,
		DNSNames:              serviceNames,
	}
	return &tmpl, nil
}

// Create cert template suitable for CA and hence signing
func createCACertTemplate(name, namespace string, notAfter time.Time) (*x509.Certificate, error) {
	rootCert, err := createCertTemplate(name, namespace, notAfter)
	if err != nil {
		return nil, err
	}
	// Make it into a CA cert and change it so we can use it to sign certs
	rootCert.IsCA = true
	rootCert.KeyUsage = x509.KeyUsageCertSign | x509.KeyUsageDigitalSignature
	rootCert.ExtKeyUsage = []x509.ExtKeyUsage{x509.ExtKeyUsageServerAuth, x509.ExtKeyUsageClientAuth}
	return rootCert, nil
}

// Actually sign the cert and return things in a form that we can use later on
func createCert(template, parent *x509.Certificate, pub, parentPriv interface{}) (
	cert *x509.Certificate, certPEM []byte, err error,
) {
	certDER, err := x509.CreateCertificate(rand.Reader, template, parent, pub, parentPriv)
	if err != nil {
		return
	}
	cert, err = x509.ParseCertificate(certDER)
	if err != nil {
		return
	}
	b := pem.Block{Type: "CERTIFICATE", Bytes: certDER}
	certPEM = pem.EncodeToMemory(&b)
	return
}

// Create cert template that we can use on the server for TLS
func createServerCertTemplate(name, namespace string, notAfter time.Time) (*x509.Certificate, error) {
	serverCert, err := createCertTemplate(name, namespace, notAfter)
	if err != nil {
		return nil, err
	}
	serverCert.KeyUsage = x509.KeyUsageDigitalSignature
	serverCert.ExtKeyUsage = []x509.ExtKeyUsage{x509.ExtKeyUsageServerAuth}
	return serverCert, err
}

// CreateCerts creates and returns a CA certificate and certificate and
// key for the server. serverKey and serverCert are used by the server
// to establish trust for clients, CA certificate is used by the
// client to verify the server authentication chain. notAfter specifies
// the expiration date.
func CreateCerts(ctx context.Context, name, namespace string, notAfter time.Time) (serverKey, serverCert, caCert []byte, err error) {
	// First create a CA certificate and private key
	caKey, caCertificate, caCertificatePEM, err := createCA(ctx, name, namespace, notAfter)
	if err != nil {
		return nil, nil, nil, err
	}

	// Then create the private key for the serving cert
	privateKey, err := ecdsa.GenerateKey(elliptic.P256(), rand.Reader)
	if err != nil {
		logger.Errorw("error generating random key", zap.Error(err))
		return nil, nil, nil, err
	}
	publicKey := privateKey.Public()

	servCertTemplate, err := createServerCertTemplate(name, namespace, notAfter)
	if err != nil {
		logger.Errorw("failed to create the server certificate template", zap.Error(err))
		return nil, nil, nil, err
	}

	// create a certificate which wraps the server's public key, sign it with the CA private key
	_, servCertPEM, err := createCert(servCertTemplate, caCertificate, publicKey, caKey)
	if err != nil {
		logger.Errorw("error signing server certificate template", zap.Error(err))
		return nil, nil, nil, err
	}
	privKeyBytes, err := x509.MarshalPKCS8PrivateKey(privateKey)
	if err != nil {
		logger.Errorw("error marshaling private key", zap.Error(err))
		return nil, nil, nil, err
	}
	servKeyPEM := pem.EncodeToMemory(&pem.Block{
		Type: "PRIVATE KEY", Bytes: privKeyBytes,
	})
	return servKeyPEM, servCertPEM, caCertificatePEM, nil
}

func createCA(ctx context.Context, name, namespace string, notAfter time.Time) (*ecdsa.PrivateKey, *x509.Certificate, []byte, error) {
	privateKey, err := ecdsa.GenerateKey(elliptic.P256(), rand.Reader)
	if err != nil {
		logger.Errorw("error generating random key", zap.Error(err))
		return nil, nil, nil, err
	}
	publicKey := privateKey.Public()

	rootCertTmpl, err := createCACertTemplate(name, namespace, notAfter)
	if err != nil {
		logger.Errorw("error generating CA cert", zap.Error(err))
		return nil, nil, nil, err
	}

	rootCert, rootCertPEM, err := createCert(rootCertTmpl, rootCertTmpl, publicKey, privateKey)
	if err != nil {
		logger.Errorw("error signing the CA cert", zap.Error(err))
		return nil, nil, nil, err
	}
	return privateKey, rootCert, rootCertPEM, nil
}

const (
	// ServerKey is the name of the key associated with the secret's private key.
	ServerKey = "server-key.pem"
	// ServerCert is the name of the key associated with the secret's public key.
	ServerCert = "server-cert.pem"
	// CACert is the name of the key associated with the certificate of the CA for
	// the keypair.
	CACert = "ca-cert.pem"

	oneDay  = 24 * time.Hour
	oneWeek = 7 * 24 * time.Hour
)

func main() {

	serverKey, serverCert, caCert, _ := CreateCerts(context.Background(), "default", "default", time.Now().Add(oneWeek))
	sc := &corev1.Secret{
		Data: map[string][]byte{
			ServerKey:  serverKey,
			ServerCert: serverCert,
			CACert:     caCert,
		},
	}

	// Check the expiration date of the certificate to see if it needs to be updated
	cert, err := tls.X509KeyPair(sc.Data[ServerCert], sc.Data[ServerKey])
	if err != nil {
		logger.Warnw("Error creating pem from certificate and key", zap.Error(err))
	} else {
		certData, err := x509.ParseCertificate(cert.Certificate[0])
		if err != nil {
			logger.Errorw("Error parsing certificate", zap.Error(err))
		} else if time.Now().Add(oneDay).Before(certData.NotAfter) {
		}
	}

}
