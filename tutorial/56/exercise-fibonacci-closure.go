package main

import "fmt"

func fibonacci() func() int {
	n1, n2 := 0, 1
	//n1, n2 := 0, 0
	return func() int {
		//if n2 == 0 {
		//	n2 = 1
		//	return 0
		//}
		//r := n1 + n2
		//n1 = n2
		//n2 = r
		//return r

		n1, n2 = n2, n1+n2
		return n1
	}

}

func main() {
	f := fibonacci()
	for i := 0; i < 10; i++ {
		fmt.Println(f())
	}
}
