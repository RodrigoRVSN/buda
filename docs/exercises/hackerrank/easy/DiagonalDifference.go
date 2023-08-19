func diagonalDifference(arr [][]int32) int32 {
	var sumLeft, sumRight int32

	for i := 0; i < len(arr); i++ {
		sumLeft += arr[i][i]
		sumRight += arr[len(arr)-i-1][i]
	}

	return int32(math.Abs(float64(sumRight - sumLeft)))
}
