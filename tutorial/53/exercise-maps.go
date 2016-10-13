package main

import (
	"golang.org/x/tour/wc"
	"strings"
)

func WordCount(s string) map[string]int {
	sArr := strings.Split(s, " ")
	m := make(map[string]int)
	for i := 0; i < len(sArr); i++ {
		v, ok := m[sArr[i]]
		if ok {
			m[sArr[i]] = v + 1
		} else {
			m[sArr[i]] = 1
		}
	}
	return m
}

func main() {
	wc.Test(WordCount)
}

