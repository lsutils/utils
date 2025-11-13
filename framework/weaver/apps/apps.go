package apps

import (
	"test/apps/user"

	"github.com/ServiceWeaver/weaver"
)

type App struct {
	weaver.Implements[weaver.Main]
	UserService weaver.Ref[user.IUserInterface]
	MainHttp    weaver.Listener `weaver:"mainhttp"` // important
}
