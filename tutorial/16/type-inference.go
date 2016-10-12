package main

import "fmt"

func main() {
	i := 42
	j := i
	f := 3.142
	g := 0.857 + 0.5i
	fmt.Printf("i, j, f, g is of type %T, %T, %T, %T\n", i, j, f, g)
}
