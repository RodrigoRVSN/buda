// Given 2 crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way

package main

import (
	"fmt"
	"math"
)

func getMinimunHeight(breaks []bool) int {
	square := int(math.Floor(math.Sqrt(float64(len(breaks)))))
	i := square
	for ; i <= len(breaks); i += square {
		if breaks[i] {
			break
		}
	}
	i -= square
	for j := 0; j < square; j, i = j+1, i+1 {
		if breaks[i] {
			return i
		}
	}
	return -1
}

func main() {
	height := getMinimunHeight([]bool{false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true})

	fmt.Println(height)
}
