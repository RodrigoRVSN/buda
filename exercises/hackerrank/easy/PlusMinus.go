func plusMinus(arr []int32) {
	var positive float64 = 0
	var negative float64 = 0
	var zeros float64 = 0

	for i := 0; i < len(arr); i++ {
		if arr[i] > 0 {
			positive++
		}
		if arr[i] < 0 {
			negative++
		}
		if arr[i] == 0 {
			zeros++
		}
	}

	fmt.Printf("%.6f\n", positive/float64(len(arr)))
	fmt.Printf("%.6f\n", negative/float64(len(arr)))
	fmt.Printf("%.6f", zeros/float64(len(arr)))
}
