package main

import (
	"encoding/json"
	"fmt"

	"github.com/lsutils/utils/sync/utils"
)

func main() {
	marshal, _ := json.Marshal(utils.GetInnerRepo())
	fmt.Println(string(marshal))
}
