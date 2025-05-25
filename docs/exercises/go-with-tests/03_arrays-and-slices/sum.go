package arrays_and_slices

func Sum(values []int) int {
	sum := 0
	for _, number := range values {
		sum += number
	}
	return sum
}

func SumAll(numbersToSum ...[]int) []int {
	numberOfSums := len(numbersToSum)
	sums := make([]int, numberOfSums)
	for i, numbers := range numbersToSum {
		sums[i] += Sum(numbers)
	}
	return sums
}
