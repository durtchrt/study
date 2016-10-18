package main

import (
	"sync"
	"net/http"
	"io/ioutil"
	"fmt"
	"regexp"
	"encoding/xml"
	"time"
	"strings"
	"strconv"
	"os"
	"path/filepath"
	"log"
	"io"
)

var chonly *regexp.Regexp = regexp.MustCompile("[^ 가-힣a-zA-Z0-9]")
var oneBlank *regexp.Regexp = regexp.MustCompile("\\s+")
var wg sync.WaitGroup

type item struct {
	//XMLName     xml.Name `xml:"item"`
	Title       string `xml:"title"`
	Author      string `xml:"author"`
	Subtitle    string `xml:"subtitle"`
	Summary     string `xml:"summary"`
	Description string `xml:"description"`
	Enclosure   struct {
		Url    string `xml:"url,attr"`
		Length string `xml:"length,attr"`
		Type   string `xml:"type,attr"`
	} `xml:"enclosure"`
	Guid     string `xml:"guid"`
	PubDate  string `xml:"pubDate"`
	Duration string `xml:"duration"`
	Explicit string `xml:"explicit"`
	Keywords string `xml:"keywords"`
}

type channel struct {
	//XMLName     xml.Name `xml:"channel"`
	Title       string `xml:"title"`
	Link        string `xml:"link"`
	Description string `xml:"description"`
	Language    string `xml:"language"`
	Copyright   string `xml:"copyright"`
	Author      string `xml:"author"`
	Keywords    string `xml:"keywords"`
	Subtitle    string `xml:"subtitle"`
	Summary     string `xml:"summary"`
	Owner       struct {
		Email string `xml:"email"`
		Name  string `xml:"name"`
	} `xml:"owner"`
	Category string `xml:"category"`
	Image    struct {
		Href string `xml:"href,attr"`
		Text string
	} `xml:"image"`
	ImageHref string `xml:"href,attr"`
	Explicit  string `xml:"explicit"`
	Items     []item `xml:"item"`
}

type wholeBody struct {
	Channel channel `xml:"channel"`
}

func main() {
	wg.Add(4)

	go parseXml("http://pod.ssenhosting.com/rss/tomato2u/ilbangbangspeaking.xml")
	go parseXml("http://pod.ssenhosting.com/rss/tomato2u/ilbangbang.xml")
	go parseXml("http://pod.ssenhosting.com/rss/tomato2u/ilbangbangch.xml")
	go parseXml("http://pod.ssenhosting.com/rss/tomato2u/ilbangbangabc.xml")

	wg.Wait()
}

func parseXml(url string) {
	defer wg.Done()
	text := urlContent(url)
	var wholeBody wholeBody
	xml.Unmarshal(text, &wholeBody)

	folderName := string(oneBlank.ReplaceAllString(chonly.ReplaceAllString(strings.Trim(wholeBody.Channel.Title, " "), ""), "_"))

	for _, mp3info := range wholeBody.Channel.Items {
		mp3Filename, ext := itemFilename(mp3info)
		if ext != ".mp3" {
			continue
		}
		urlFile(mp3info.Enclosure.Url, folderName, mp3Filename)
	}

	//var wholeBody wholeBody

}
func urlFile(url string, folder string, filename string) {

	if _, err := os.Stat(folder); os.IsNotExist(err) {
		os.MkdirAll(folder, 0777)
	}
	if fi, _ := os.Stat(folder + string(filepath.Separator) + filename); fi != nil {
		return
	}

	fmt.Println(folder + string(filepath.Separator) + filename)
	var res *http.Response
	var err error
	for {
		res, err = http.Get(url)
		if err != nil {
			time.Sleep(100*time.Millisecond)
			//res.Body.Close()
		} else {
			break
		}
	}
	defer res.Body.Close()

	file, err := os.Create(folder + string(filepath.Separator) + filename)
	if err != nil {
		log.Fatal(err)
	}

	_, err = io.Copy(file, res.Body)
	if err != nil {
		log.Fatal(err)
	}
}

func itemFilename(item item) (string, string) {
	t, _ := time.Parse(time.RFC1123Z, item.PubDate)
	datetimeString := t.Format("0601021504")
	dursplit := strings.Split(item.Duration, ":")
	durH, _ := strconv.Atoi(dursplit[0])
	durM, _ := strconv.Atoi(dursplit[1])
	durS, _ := strconv.Atoi(dursplit[2])
	minutes := durH*60 + durM
	if durS > 0 {
		minutes += 1
	}
	minutesString := fmt.Sprintf("%03d", minutes)
	pointpos := strings.LastIndex(item.Enclosure.Url, ".")
	editedTitle := string(oneBlank.ReplaceAllString(chonly.ReplaceAllString(item.Title, ""), "_"))
	ext := string(item.Enclosure.Url[pointpos:])
	return datetimeString + "-" + minutesString + "-" + editedTitle + ext, ext
}

func urlContent(url string) []byte {

	client := http.Client{}
	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Set("User-Agent",  "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1")
	res, _ := client.Do(req)
	defer res.Body.Close()

	b, err := ioutil.ReadAll(res.Body)
	if err != nil {
		fmt.Println(err)
	}
	return b
}