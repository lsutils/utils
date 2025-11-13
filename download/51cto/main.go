package main

import (
	"flag"
	"fmt"
	"log"

	"github.com/google/uuid"
	"github.com/lbbniu/aliyun-m3u8-downloader/pkg/download"
	"github.com/lbbniu/aliyun-m3u8-downloader/pkg/request"
	"github.com/lbbniu/aliyun-m3u8-downloader/pkg/tool"
)

var playAuth = flag.String("playAuth", "", "playAuth")
var filePath = flag.String("filePath", "", "filePath")
var videoId = flag.String("videoId", "", "videoId")
var chunkSize = flag.Int("chunkSize", 1, "chunkSize")

func main() {
	flag.Parse()
	// 随机字符串
	clientRand := uuid.NewString()
	sj, err := request.GetVodPlayerInfo(clientRand, *playAuth, *videoId)
	if err != nil {
		log.Fatalln(err)
		return
	}
	//tool.PrintJson(sj)
	playInfoList, err := sj.Get("PlayInfoList").Get("PlayInfo").Array()
	if err != nil {
		log.Println(sj)
		log.Fatalln(err)
		return
	}
	playInfo := sj.Get("PlayInfoList").Get("PlayInfo").GetIndex(len(playInfoList) - 1)
	serverRand, _ := playInfo.Get("Rand").String()
	plaintext, _ := playInfo.Get("Plaintext").String()
	playURL, _ := playInfo.Get("PlayURL").String()
	tool.PrintJson(playURL)
	key := tool.DecryptKey(clientRand, serverRand, plaintext)
	downloader, err := download.NewTask(*filePath, playURL, key)
	if err != nil {
		panic(err)
	}
	if err := downloader.Start(*chunkSize); err != nil {
		panic(err)
	}
	fmt.Println("Done!")
}
