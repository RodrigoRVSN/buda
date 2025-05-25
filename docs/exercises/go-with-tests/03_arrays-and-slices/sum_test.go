package arrays_and_slices

import (
	"reflect"
	"testing"
)

func TestSum(t *testing.T) {
	values := []int{1, 2, 3, 4, 5}
	result := Sum(values)
	expected := 15

	if result != expected {
		t.Errorf("expected %d, got %d", expected, result)
	}
}

func TestSumAllTails(t *testing.T) {
	checkSums := func(t testing.TB, got, want []int) {
		t.Helper()
		if !reflect.DeepEqual(got, want) {
			t.Errorf("expected %v, got %v", want, got)
		}
	}

	t.Run("make the sums of slices", func(t *testing.T) {
		got := SumAllTails([]int{1, 2, 3}, []int{0, 9, 4})
		want := []int{5, 13}
		checkSums(t, got, want)
	})

	t.Run("should return 0 if it is an empty slice", func(t *testing.T) {
		got := SumAllTails([]int{}, []int{0, 9, 4})
		want := []int{0, 13}
		checkSums(t, got, want)
	})
}
