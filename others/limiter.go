package main

import (
	"fmt"
	"time"

	"golang.org/x/time/rate"
)

// 方式一：使用 Wait 方法自动等待
//func main() {
//	limiter := rate.NewLimiter(1, 3)
//	for i := 0; ; i++ {
//		err := limiter.Wait(context.TODO())
//		if err != nil {
//			log.Fatalln(err)
//		}
//		fmt.Println(i)
//	}
//}

// 方式二：手工设置等待时间
func main() {
	limiter := rate.NewLimiter(1, 3)
	fmt.Println(limiter.Tokens())

	for i := 0; ; i++ {
		r := limiter.Reserve()
		if r.Delay() > 0 {
			fmt.Println("令牌不够了，需要等: ", r.Delay())
		}
		// 手动等待
		time.Sleep(r.Delay())
		fmt.Println(i)
	}
}
