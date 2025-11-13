package other

import (
	"errors"
	"reflect"
)

func convertToInterfaceSlice(slice interface{}) ([]interface{}, error) {
	// 获取切片的值和类型信息
	value := reflect.ValueOf(slice)
	if value.Kind() != reflect.Slice {
		return nil, errors.New("convertToInterfaceSlice: not interview slice")
	}
	elemType := value.Type().Elem()

	// 构造[]interface{}类型的切片
	result := make([]interface{}, value.Len())
	for i := 0; i < value.Len(); i++ {
		elemValue := value.Index(i)
		if !elemValue.Type().AssignableTo(reflect.TypeOf((*interface{})(nil)).Elem()) {
			return nil, errors.New("convertToInterfaceSlice: element type not assignable to interface{}")
		}
		result[i] = elemValue.Convert(elemType).Interface()
	}
	return result, nil
}
