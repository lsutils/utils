package user

import (
	"context"

	"github.com/ServiceWeaver/weaver"
	"github.com/google/uuid"
)

type IUserInterface interface {
	GetUser(ctx context.Context) (string, error)
}

var _ IUserInterface = userService{}

type userService struct {
	weaver.Implements[IUserInterface]
}

func (u userService) GetUser(ctx context.Context) (string, error) {
	newUUID, _ := uuid.NewUUID()
	return newUUID.String(), nil
}
