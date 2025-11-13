package _struct

type ClassList struct {
	Code int  `json:"code"`
	Data Data `json:"data"`
}
type Data struct {
	List []ListItem `json:"list"`
}
type ListItem struct {
	PID interface{} `json:"pid"`
}
