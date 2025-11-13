package main

import (
	"encoding/json"
	"fmt"
)

type A struct {
	Name string `json:"name"`
	Num  *int   `json:"num"`
}

func (a *A) UnmarshalJSON(b []byte) error {
	type alias A
	aux := (*alias)(a)
	if err := json.Unmarshal(b, &aux); err != nil {
		return err
	}
	if aux.Num == nil {
		aux.Num = new(int)
	}
	return nil
}

func main() {
	var a A
	err := json.Unmarshal([]byte(`{"name": "hsowan"}`), &a)
	if err != nil {
		panic(err)
	}
	fmt.Println(a.Name)
	fmt.Println(*a.Num)
}
