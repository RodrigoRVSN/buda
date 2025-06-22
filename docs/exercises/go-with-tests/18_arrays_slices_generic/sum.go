package arrays_and_slices

func Sum(values []int) int {
	add := func(acc, x int) int { return acc + x }
	return Reduce(values, add, 0)
}

func SumAllTails(numbersToSum ...[]int) []int {
	sumTail := func(acc, numbers []int) []int {
		if len(numbers) == 0 {
			return append(acc, 0)
		} else {
			tail := numbers[1:]
			return append(acc, Sum(tail))
		}
	}
	return Reduce(numbersToSum, sumTail, []int{})
}

func Reduce[A, B any](collection []A, f func(B, A) B, initialValue B) B {
	result := initialValue
	for _, x := range collection {
		result = f(result, x)
	}
	return result
}

type Transaction struct {
	From string
	To   string
	Sum  float64
}

func BalanceFor(transactions []Transaction, name string) float64 {
	adjustBalance := func(currentBalance float64, t Transaction) float64 {
		if t.From == name {
			return currentBalance - t.Sum
		}
		if t.To == name {
			return currentBalance + t.Sum
		}
		return currentBalance
	}
	return Reduce(transactions, adjustBalance, 0.0)
}

func Find[A any](items []A, predicate func(A) bool) (value A, found bool) {
	for _, v := range items {
		if predicate(v) {
			return v, true
		}
	}
	return
}
