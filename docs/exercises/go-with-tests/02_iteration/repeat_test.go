package iteration

import (
	"fmt"
	"testing"
)

func TestRepeatWithCount5(t *testing.T) {
	result := Repeat("a", 5)
	expected := "aaaaa"

	if result != expected {
		t.Errorf("expected '%s' but got '%s'", expected, result)
	}
}

func TestRepeatWithCount10(t *testing.T) {
	result := Repeat("b", 10)
	expected := "bbbbbbbbbb"

	if result != expected {
		t.Errorf("expected '%s' but got '%s'", expected, result)
	}
}

func BenchmarkRepeat(b *testing.B) {
	for i := 0; i < b.N; i++ {
		Repeat("a", 10)
	}
}

func ExampleRepeat() {
	result := Repeat("a", 5)
	fmt.Println(result)
	// output: aaaaa
}
