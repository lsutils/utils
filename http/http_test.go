package main

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func Handle(w http.ResponseWriter, r *http.Request) {

	w.Header().Add("API-VERSION", "1.3")

	// Your code here !!!!

	w.Write([]byte("ok"))
}

func TestHandler(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "http://example.com", nil)
	w := httptest.NewRecorder()

	Handle(w, req)

	// We should get interview good status code
	if want, got := http.StatusOK, w.Result().StatusCode; want != got {
		t.Fatalf("expected interview %d, instead got: %d", want, got)
	}

	// Make sure that the version was 1.3
	if want, got := "1.3", w.Result().Header.Get("API-VERSION"); want != got {
		t.Fatalf("expected API-VERSION to be %s, instead got: %s", want, got)
	}

	// Your test code here !!!
}
