func countingSort(arr []int32) []int32 {
	count := make([]int32, 100)

	for _, number := range arr {
		count[number]++
	}

	return count
}
