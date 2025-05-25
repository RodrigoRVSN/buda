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

func TestSumAll(t *testing.T) {
	result := SumAll([]int{1, 2, 3}, []int{0, 9, 4})
	expected := []int{6, 13}
	if !reflect.DeepEqual(expected, result) {
		t.Errorf("expected %v, got %v", expected, result)
	}
}
