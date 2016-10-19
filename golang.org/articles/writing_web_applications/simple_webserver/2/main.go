package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

type Page struct {
	Title string
	Body []byte
}

func handler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/view/"):]
	p, err := loadPage(title)
	if err != nil {
		fmt.Fprint(w, "<h1>invalid path</h1>")
		return
	}
	fmt.Fprintf(w, "<h1>%s</h1><div>%s</div>", p.Title, p.Body)
}

func main() {
	http.HandleFunc("/view/", handler)
	err := http.ListenAndServe(":9999", nil)
	if err != nil {
		fmt.Println(err)
	}
}

func loadPage(title string) (*Page, error) {
	filename := title + ".txt"
	body, err := ioutil.ReadFile(filename)
	if err != nil {
		fmt.Println("fail file load")
		return nil, err
	}
	return &Page{Title: title, Body: body}, nil
}