package iteration

import "testing"

func TestRepeat(t *testing.T) {
	result := Repeat("a")
	expected := "aaaaa"

	if result != expected {
		t.Errorf("expected '%s' but got '%s'", expected, result)
	}
}

func BenchmarkRepeat(b *testing.B) {
	for i := 0; i < b.N; i++ {
		Repeat("a")
	}
}
