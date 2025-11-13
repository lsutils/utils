package compents

import (
	"context"

	"golang.org/x/sync/singleflight"
)

type service struct {
	requestGroup singleflight.Group
}
type Request struct {
}

func (r Request) Hash() string {
	return ""
}

type Response struct {
	row []string
}

func (s *service) handleRequest(ctx context.Context, request Request) (*Response, error) {
	v, err, _ := s.requestGroup.Do(request.Hash(), func() (interface{}, error) {
		return nil, nil
	})
	if err != nil {
		return &Response{}, err
	}
	return v.(*Response), nil
}
