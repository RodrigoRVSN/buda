func lonelyinteger(a []int32) int32 {
	count := make(map[int32]int)

	for _, num := range a {
		count[num]++
	}

	for _, num := range a {
		if count[num] == 1 {
			return num
		}
	}

	return 0
}
