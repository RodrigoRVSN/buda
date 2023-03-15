package kata

import "math"

func NearestSq(n int) int {
	number := float64(n)

	squareNumber := math.Sqrt(number)
	roundedSquare := math.Round(squareNumber)
	nearestSquare := math.Pow(roundedSquare, 2)

	return int(nearestSquare)
}
