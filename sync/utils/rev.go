package utils

import (
	"crypto/md5"
	"encoding/hex"
	"strings"

	. "github.com/lsutils/utils/sync"
)

func ReverseImage(lines []string) string {
	var linesBak []string

	for _, line := range lines {
		linesBak = append(linesBak, line)
	}

	var res []string

	for _, line := range lines {

		if strings.Trim(line, TrimChars) == "" {
			continue
		}
		line = strings.Trim(line, TrimChars)

		ss := strings.Split(line, ":")
		mda := strings.Split(ss[len(ss)-1], "-")[0]
		_append := false
		for oldImage, newImage := range randomImageMap {
			if !strings.Contains(line, "acejilam/ib-") {
				continue
			}
			_ = newImage
			imageRepoBytes := md5.Sum([]byte(oldImage))
			imageRepoMd5 := hex.EncodeToString(imageRepoBytes[:])
			if imageRepoMd5 == mda {
				newLine := oldImage + ":" + strings.Join(strings.Split(ss[len(ss)-1], "-")[1:], "-")
				newLine = strings.Trim(newLine, TrimChars)
				res = append(res, newLine)
				_append = true
				break
			}
		}
		for oldImage, newImage := range fixedImageMap {
			_ = newImage
			_ = oldImage
			if strings.Contains(line, newImage+":") {
				newLine := oldImage + ":" + ss[len(ss)-1]
				newLine = strings.Trim(newLine, TrimChars)
				res = append(res, newLine)
				_append = true
				break
			}
		}
		if !_append {
			res = append(res, line)
		}
	}

	return strings.Trim(strings.Join(res, "\n"), TrimChars)
}
