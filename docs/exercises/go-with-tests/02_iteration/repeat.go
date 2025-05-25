package iteration

import "strings"

func Repeat(character string, count int) string {
	var repeated strings.Builder
	for i := 0; i < count; i++ {
		repeated.WriteString(character)
	}
	return repeated.String()
}
