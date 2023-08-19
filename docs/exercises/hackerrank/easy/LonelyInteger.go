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

/*

func lonelyinteger(a []int32) int32 {
    var number int32
    
    for i := 0; i < len(a); i++ {
        isUnique := true
        
        for j := 0; j < len(a); j++ {
            if a[j] == a[i] && j != i {
                isUnique = false
            }
        }
        
        if (isUnique) {
            number = a[i]
        }
    }

    return number
}

*/
