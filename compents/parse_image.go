package compents

import (
	"fmt"
	"log"

	"github.com/google/go-containerregistry/pkg/name"
	"github.com/google/go-containerregistry/pkg/v1/remote"
)

func main1() {
	//alpine:3.12
	ref, err := name.ParseReference("nginx:1.18-alpine", name.WeakValidation) //使用非严格模式
	if err != nil {
		log.Fatalln(err)
	}
	des, err := remote.Get(ref) // 获取镜像描述信息
	if err != nil {
		log.Fatalln(err)
	}

	if des.MediaType.IsImage() {

		img, err := des.Image()
		if err != nil {
			return
		}
		cf, err := img.ConfigFile()
		if err != nil {
			return
		}
		fmt.Println(cf.OS, "/", cf.Architecture, ":", cf.Config.Entrypoint, cf.Config.Cmd)
	} else if des.MediaType.IsIndex() {

		//下方是 index 模式
		idx, err := des.ImageIndex()
		if err != nil {
			log.Fatalln(err)
		}
		mf, err := idx.IndexManifest()

		if err != nil {
			log.Fatalln(err)
		}
		for _, d := range mf.Manifests {
			img, err := idx.Image(d.Digest)
			if err != nil {
				log.Fatalln(err)
			}

			cf, err := img.ConfigFile()
			if err != nil {
				log.Fatalln(err)
			}
			fmt.Println(cf.OS, "/", cf.Architecture, ":", cf.Config.Entrypoint, cf.Config.Cmd)
		}
	}

}
