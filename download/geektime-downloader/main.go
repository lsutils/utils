package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"math/rand"
	"os"
	"path/filepath"
	"runtime"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/briandowns/spinner"
	"github.com/nicoxiang/geektime-downloader/internal/audio"
	"github.com/nicoxiang/geektime-downloader/internal/cmd"
	"github.com/nicoxiang/geektime-downloader/internal/config"
	"github.com/nicoxiang/geektime-downloader/internal/geektime"
	"github.com/nicoxiang/geektime-downloader/internal/markdown"
	"github.com/nicoxiang/geektime-downloader/internal/pdf"
	"github.com/nicoxiang/geektime-downloader/internal/pkg/filenamify"
	"github.com/nicoxiang/geektime-downloader/internal/video"
	"github.com/spf13/cobra"
	"golang.org/x/net/html"
)

var (
	concurrency         int
	downloadFolder      string
	relPath             string
	sp                  *spinner.Spinner
	selectedProduct     geektime.Product
	quality             string
	downloadComments    bool
	selectedProductType productTypeSelectOption
	classID             int
	columnOutputType    int
	waitSeconds         int
	productTypeIndex    int
	productTypeOptions  = make([]productTypeSelectOption, 6)
	geektimeClient      *geektime.Client
	accountClient       *geektime.Client
	universityClient    *geektime.Client
)

type productTypeSelectOption struct {
	Index              int
	Text               string
	SourceType         int
	AcceptProductTypes []string
	needSelectArticle  bool
}

var downloadSummary = map[string]map[int]bool{}

func Marshal(t string, id int) {
	if _, ok := downloadSummary[t]; !ok {
		downloadSummary[t] = map[int]bool{}
	}
	downloadSummary[t][id] = true
	marshal, _ := json.Marshal(downloadSummary)
	ioutil.WriteFile("./over.json", marshal, os.ModePerm)
}

func init() {
	file, _ := ioutil.ReadFile("./over.json")

	json.Unmarshal(file, &downloadSummary)

	concurrency = runtime.NumCPU()
	setProductTypeOptions()
	rootCmd.Flags().StringVarP(&downloadFolder, "folder", "f", "/Volumes/Ventoy/视频/极客时间", "专栏和视频课的下载目标位置")
	rootCmd.Flags().StringVarP(&quality, "quality", "q", "sd", "下载视频清晰度(ld标清,sd高清,hd超清)")
	rootCmd.Flags().BoolVar(&downloadComments, "comments", true, "是否需要专栏的第一页评论")
	rootCmd.Flags().IntVar(&waitSeconds, "wait-seconds", 8, "Chrome生成PDF前的等待页面加载时间, 单位为秒, 默认8秒")

	rootCmd.Flags().IntVar(&productTypeIndex, "productTypeIndex", 0, "0普通课程,1每日一课,2公开课,3大厂案例,4训练营,5其他")
	rootCmd.Flags().StringVarP(&relPath, "relPath", "r", "", "子路径")
	rootCmd.Flags().IntVar(&classID, "classID", 100550701, "课程ID")

	sp = spinner.New(spinner.CharSets[4], 100*time.Millisecond)
	accountClient = geektime.NewAccountClient()
}

func setProductTypeOptions() {
	// https://time.geekbang.org/serv/v3/lecture/list   {"label_id":0,"type":0}
	productTypeOptions[0] = productTypeSelectOption{0, "普通课程", 1, []string{"c1", "c3"}, true}
	//https://time.geekbang.org/serv/v3/product/list    {"type":"d","size":20,"prev":0,"orderby":"hot"}
	productTypeOptions[1] = productTypeSelectOption{1, "每日一课", 2, []string{"d"}, false}
	//https://time.geekbang.org/serv/v3/product/list    {"type":"q","size":20,"prev":0,"orderby":"new"}
	productTypeOptions[3] = productTypeSelectOption{3, "大厂案例", 4, []string{"q"}, false}

	// pass
	productTypeOptions[2] = productTypeSelectOption{2, "公开课", 1, []string{"p35", "p29", "p30"}, true}
	productTypeOptions[4] = productTypeSelectOption{4, "训练营", 5, []string{""}, true} //custom source type, not use
	productTypeOptions[5] = productTypeSelectOption{5, "其他", 1, []string{"x", "c6"}, true}
}

var rootCmd = &cobra.Command{
	Use:   "geektime-downloader",
	Short: "Geektime-downloader is used to download geek time lessons",
	Run: func(c *cobra.Command, args []string) {
		readCookies, err := config.ReadCookieFromConfigFile()
		cmd.CheckError(err)
		geektimeClient = geektime.NewClient(readCookies)
		universityClient = geektime.NewUniversityClient(readCookies)
		selectedProductType = productTypeOptions[productTypeIndex]
		letInputProductID(context.Background(), classID)
	},
}

func letInputProductID(ctx context.Context, classID int) {
	if selectedProductType.needSelectArticle {
		// choose download all or download specified article

		for _, item := range downloadSummary {
			if _, ok := item[classID]; ok {
				return
			}
		}
		loadProduct(ctx, classID)
		productOps(ctx)
	} else {
		// when product type is daily lesson or qconplus,
		// input id means product id
		// download video directly
		productInfo, err := geektimeClient.ProductInfo(classID)
		cmd.CheckError(err)

		if productInfo.Data.Info.Extra.Sub.AccessMask == 0 {
			Marshal("nobuy", classID)
			log.Fatalln("------>尚未购买该课程")
			return
		}

		if checkProductType(productInfo.Data.Info.Type) {
			//projectDir, err := mkDownloadProjectDir(downloadFolder, productInfo.Data.Info.Title)
			projectDir, err := mkDownloadProjectDir(downloadFolder, relPath)
			cmd.CheckError(err)

			err = video.DownloadArticleVideo(ctx, "", geektimeClient, productInfo.Data.Info.Article.ID, selectedProductType.SourceType, projectDir, quality, concurrency)

			cmd.CheckError(err)
		}
	}
}

func loadProduct(ctx context.Context, productID int) {
	sp.Prefix = "[ 正在加载课程信息... ]"
	sp.Start()
	var p geektime.Product
	var err error
	if isUniversity() {
		p, err = universityClient.MyClassProduct(productID)
		// university don't need check product type
		// if input invalid id, access mark is 0
	} else {
		p, err = geektimeClient.ColumnInfo(productID)
		if err == nil {
			c := checkProductType(p.Type)
			// if check product type fail, re-input product
			if !c {
				sp.Stop()
			}
		}
	}

	if err != nil {
		sp.Stop()
		cmd.CheckError(err)
	}
	sp.Stop()
	if !p.Access {
		Marshal("nobuy", classID)
		log.Fatalln("尚未购买该课程")
	}
	selectedProduct = p
}

func productOps(ctx context.Context) {
	if isText() { // 下载当前专栏所有文章
		handleDownloadAll(ctx)
	} else {
		selectArticle(ctx)
	}

}

func selectArticle(ctx context.Context) {
	loadArticles()
	for i, a := range selectedProduct.Articles {

		skip := false
		for _, item := range downloadSummary {
			if _, ok := item[a.AID]; ok {
				skip = true
			}
		}
		if skip {
			continue
		}

		start := time.Now()
		projectDir, err := mkDownloadProjectDir(downloadFolder, selectedProduct.Title)
		cmd.CheckError(err)
		downloadArticle(ctx, fmt.Sprintf("%d/%d", i, len(selectedProduct.Articles)), a, projectDir)
		Marshal("over", a.AID)
		fmt.Printf("  cost  %s\n", time.Now().Sub(start))
	}
	if len(selectedProduct.Articles) > 0 {
		Marshal("over", classID)
	}
}

func handleDownloadAll(ctx context.Context) {
	loadArticles()
	projectDir, err := mkDownloadProjectDir(downloadFolder, selectedProduct.Title)
	cmd.CheckError(err)
	downloaded, err := findDownloadedArticleFileNames(projectDir)
	cmd.CheckError(err)
	if isText() {
		rand.Seed(time.Now().UnixNano())
		fmt.Printf("正在下载专栏 《%s》 中的所有文章\n", selectedProduct.Title)
		for num, a := range selectedProduct.Articles {
			time.Sleep(time.Duration(rand.Int31n(3000))*time.Millisecond + time.Second)
			skip := false
			for _, item := range downloadSummary {
				if _, ok := item[a.AID]; ok {
					skip = true
				}
			}
			if skip {
				continue
			}
			wg := sync.WaitGroup{}
			wg.Add(4)
			fmt.Printf("%d/%d ,downloading %s\n", num, len(selectedProduct.Articles), a.Title)
			fileName := filenamify.Filenamify(a.Title)
			articleInfo, err := geektimeClient.V1ArticleInfo(a.AID) // 会发送请求
			cmd.CheckError(err)
			hasVideo, videoURL := getVideoURLFromArticleContent(articleInfo.Data.ArticleContent)

			go func() {
				if hasVideo && videoURL != "" {
					err = video.DownloadMP4(ctx, a.Title, projectDir, []string{videoURL})
				}
				if len(articleInfo.Data.InlineVideoSubtitles) > 0 {
					videoURLs := make([]string, len(articleInfo.Data.InlineVideoSubtitles))
					for i, v := range articleInfo.Data.InlineVideoSubtitles {
						videoURLs[i] = v.VideoURL
					}
					err = video.DownloadMP4(ctx, a.Title, projectDir, videoURLs)
				}
				wg.Done()
			}()
			go func() {
				if _, exists := downloaded[fileName+pdf.PDFExtension]; !exists { // needDownloadPDF
					err = pdf.PrintArticlePageToPDF(ctx,
						a.AID,
						projectDir,
						a.Title,
						geektimeClient.Cookies,
						downloadComments,
						waitSeconds,
					)
					cmd.CheckError(err)
				}
				wg.Done()
			}()
			go func() {
				if _, exists := downloaded[fileName+markdown.MDExtension]; !exists { // needDownloadMD
					err = markdown.Download(ctx,
						articleInfo.Data.ArticleContent,
						a.Title,
						projectDir,
						a.AID)
					cmd.CheckError(err)
				}
				wg.Done()
			}()
			go func() {
				if _, exists := downloaded[fileName+audio.MP3Extension]; !exists && articleInfo.Data.AudioDownloadURL != "" { // needDownloadAudio
					err = audio.DownloadAudio(ctx, articleInfo.Data.AudioDownloadURL, projectDir, a.Title)
					cmd.CheckError(err)
				}
				wg.Done()
			}()
			wg.Wait()
			Marshal("over", a.AID)
		}
		Marshal("over", classID)
	} else {
		for i, a := range selectedProduct.Articles {
			fileName := filenamify.Filenamify(a.Title) + video.TSExtension
			if _, ok := downloaded[fileName]; ok {
				continue
			}
			if isUniversity() {
				err := video.DownloadUniversityVideo(ctx, fmt.Sprintf("%d/%d", i, len(selectedProduct.Articles)), universityClient, a.AID, selectedProduct, projectDir, quality, concurrency)
				cmd.CheckError(err)
			} else {
				err := video.DownloadArticleVideo(ctx, fmt.Sprintf("%d/%d", i, len(selectedProduct.Articles)), geektimeClient, a.AID, selectedProductType.SourceType, projectDir, quality, concurrency)
				cmd.CheckError(err)
			}
		}
	}
}

func loadArticles() {
	if !isUniversity() && len(selectedProduct.Articles) <= 0 {
		sp.Prefix = "[ 正在加载文章列表... ]"
		sp.Start()
		articles, err := geektimeClient.ColumnArticles(strconv.Itoa(selectedProduct.ID))
		cmd.CheckError(err)
		selectedProduct.Articles = articles
		sp.Stop()
	}
}

func downloadArticle(ctx context.Context, info string, article geektime.Article, projectDir string) {
	if isText() {
		needDownloadPDF := columnOutputType&1 == 1
		needDownloadMD := (columnOutputType>>1)&1 == 1
		needDownloadAudio := (columnOutputType>>2)&1 == 1

		articleInfo, err := geektimeClient.V1ArticleInfo(article.AID)
		cmd.CheckError(err)

		sp.Prefix = fmt.Sprintf("[ 正在下载 《%s》... ]", article.Title)
		hasVideo, videoURL := getVideoURLFromArticleContent(articleInfo.Data.ArticleContent)
		if len(articleInfo.Data.InlineVideoSubtitles) > 0 || hasVideo && videoURL != "" {
			sp.Prefix = fmt.Sprintf("[ 正在下载 《%s》, 该文章中包含视频, 请耐心等待... ]", article.Title)
		}
		sp.Start()

		if hasVideo && videoURL != "" {
			err = video.DownloadMP4(ctx, article.Title, projectDir, []string{videoURL})
		}

		if len(articleInfo.Data.InlineVideoSubtitles) > 0 {
			videoURLs := make([]string, len(articleInfo.Data.InlineVideoSubtitles))
			for i, v := range articleInfo.Data.InlineVideoSubtitles {
				videoURLs[i] = v.VideoURL
			}
			err = video.DownloadMP4(ctx, article.Title, projectDir, videoURLs)
		}

		if needDownloadPDF {
			cmd.CheckError(err)
			err = pdf.PrintArticlePageToPDF(ctx,
				article.AID,
				projectDir,
				article.Title,
				geektimeClient.Cookies,
				downloadComments,
				waitSeconds,
			)
			if err != nil {
				sp.Stop()
				cmd.CheckError(err)
			}
		}

		if needDownloadMD {
			err = markdown.Download(ctx,
				articleInfo.Data.ArticleContent,
				article.Title,
				projectDir,
				article.AID)
		}

		if needDownloadAudio {
			err = audio.DownloadAudio(ctx, articleInfo.Data.AudioDownloadURL, projectDir, article.Title)
		}

		sp.Stop()
		cmd.CheckError(err)
	} else {
		if isUniversity() {
			err := video.DownloadUniversityVideo(ctx, info, universityClient, article.AID, selectedProduct, projectDir, quality, concurrency)
			cmd.CheckError(err)
		} else {
			err := video.DownloadArticleVideo(ctx, info, geektimeClient, article.AID, selectedProductType.SourceType, projectDir, quality, concurrency)
			cmd.CheckError(err)
		}
	}
}

func isText() bool {
	return !selectedProduct.IsVideo
}

func isUniversity() bool {
	return selectedProductType.Index == 4
}

func findDownloadedArticleFileNames(projectDir string) (map[string]struct{}, error) {
	files, err := ioutil.ReadDir(projectDir)
	res := make(map[string]struct{}, len(files))
	if err != nil {
		return res, err
	}
	if len(files) == 0 {
		return res, nil
	}
	for _, f := range files {
		res[f.Name()] = struct{}{}
	}
	return res, nil
}

func mkDownloadProjectDir(downloadFolder, projectName string) (string, error) {
	path := filepath.Join(downloadFolder, selectedProductType.Text, filenamify.Filenamify(projectName))
	err := os.MkdirAll(path, os.ModePerm)
	if err != nil {
		return "", err
	}
	return path, nil
}

func checkProductType(productType string) bool {
	for _, pt := range selectedProductType.AcceptProductTypes {
		if pt == productType {
			return true
		}
	}
	fmt.Fprint(os.Stderr, "\r输入的课程 ID 有误\n")
	return false
}

// Sometime video exist in article content, see issue #104
// <p>
// <video poster="https://static001.geekbang.org/resource/image/6a/f7/6ada085b44eddf37506b25ad188541f7.jpg" preload="none" controls="">
// <source src="https://media001.geekbang.org/customerTrans/fe4a99b62946f2c31c2095c167b26f9c/30d99c0d-16d14089303-0000-0000-01d-dbacd.mp4" type="video/mp4">
// <source src="https://media001.geekbang.org/2ce11b32e3e740ff9580185d8c972303/a01ad13390fe4afe8856df5fb5d284a2-f2f547049c69fa0d4502ab36d42ea2fa-sd.m3u8" type="application/x-mpegURL">
// <source src="https://media001.geekbang.org/2ce11b32e3e740ff9580185d8c972303/a01ad13390fe4afe8856df5fb5d284a2-2528b0077e78173fd8892de4d7b8c96d-hd.m3u8" type="application/x-mpegURL"></video>
// </p>
func getVideoURLFromArticleContent(content string) (hasVideo bool, videoURL string) {
	if !strings.Contains(content, "<video") || !strings.Contains(content, "<source") {
		return false, ""
	}
	doc, err := html.Parse(strings.NewReader(content))
	if err != nil {
		return false, ""
	}
	hasVideo, videoURL = false, ""
	var f func(*html.Node)
	f = func(n *html.Node) {
		if n.Type == html.ElementNode && n.Data == "video" {
			hasVideo = true
		}
		if n.Type == html.ElementNode && n.Data == "source" {
			for _, a := range n.Attr {
				if a.Key == "src" && hasVideo && strings.HasSuffix(a.Val, ".mp4") {
					videoURL = a.Val
					break
				}
			}
		}
		for c := n.FirstChild; c != nil; c = c.NextSibling {
			f(c)
		}
	}
	f(doc)
	return hasVideo, videoURL
}

func main() {
	itoa := strconv.Itoa(os.Getpid())
	ioutil.WriteFile("/tmp/geektime.id", []byte(itoa), os.ModePerm)
	rootCmd.Execute()
}
