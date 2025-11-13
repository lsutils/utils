package lib

import (
	"log"

	"github.com/casbin/casbin/v2"
	gormadapter "github.com/casbin/gorm-adapter/v3"
)

var E *casbin.Enforcer

func init() {

	initDB()
	adapter, err := gormadapter.NewAdapterByDB(Gorm)
	if err != nil {
		log.Fatal()
	}
	e, err := casbin.NewEnforcer("resources/model_t.conf", adapter)
	if err != nil {
		log.Fatal()
	}
	err = e.LoadPolicy()
	if err != nil {
		log.Fatal()
	}
	E = e
}

// 租户 初始化
func initPolicyWithDomain() {
	//_, err := E.AddRoleForUserInDomain(r.PRole, r.Role, r.Domain) //看这一句，加了domain参数
	//_, err := E.AddPolicy(rr.RoleName, rr.Domain, rr.RouterUri, rr.RouterMethod)
}
