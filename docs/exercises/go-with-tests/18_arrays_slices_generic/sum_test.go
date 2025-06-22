package arrays_and_slices

import (
	"reflect"
	"strings"
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

	t.Run("should return 0 if there is no tail", func(t *testing.T) {
		got := SumAllTails([]int{5}, []int{0, 9, 4})
		want := []int{0, 13}
		checkSums(t, got, want)
	})
}

func TestReduce(t *testing.T) {
	t.Run("multiplication of all elements", func(t *testing.T) {
		multiply := func(x, y int) int {
			return x * y
		}

		AssertEqual(t, Reduce([]int{1, 2, 3}, multiply, 1), 6)
	})

	t.Run("concatenate strings", func(t *testing.T) {
		concatenate := func(x, y string) string {
			return x + y
		}

		AssertEqual(t, Reduce([]string{"a", "b", "c"}, concatenate, ""), "abc")
	})
}

func AssertEqual[T comparable](t *testing.T, got, want T) {
	t.Helper()
	if got != want {
		t.Errorf("got %+v, want %+v", got, want)
	}
}

func TestBadBank(t *testing.T) {
	transactions := []Transaction{
		{
			From: "Chris",
			To:   "Riya",
			Sum:  100,
		},
		{
			From: "Adil",
			To:   "Chris",
			Sum:  25,
		},
	}

	AssertEqual(t, BalanceFor(transactions, "Riya"), 100)
	AssertEqual(t, BalanceFor(transactions, "Chris"), -75)
	AssertEqual(t, BalanceFor(transactions, "Adil"), -25)
}

type Person struct {
	Name string
}

func TestFind(t *testing.T) {
	t.Run("find first even number", func(t *testing.T) {
		numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

		firstEvenNumber, found := Find(numbers, func(x int) bool {
			return x%2 == 0
		})
		AssertTrue(t, found)
		AssertEqual(t, firstEvenNumber, 2)
	})

	t.Run("Find the best programmer", func(t *testing.T) {
		people := []Person{
			{Name: "Kent Beck"},
			{Name: "Martin Fowler"},
			{Name: "Rodrigo Victor"},
		}

		king, found := Find(people, func(p Person) bool {
			return strings.Contains(p.Name, "Rodrigo")
		})

		AssertTrue(t, found)
		AssertEqual(t, king, Person{Name: "Rodrigo Victor"})
	})
}

func AssertTrue(t *testing.T, got bool) {
	t.Helper()
	if !got {
		t.Errorf("got %v, want true", got)
	}
}
