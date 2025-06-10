package counter

import (
	"sync"
	"testing"
)

func TestCounter(t *testing.T) {
	t.Run("incrementing the counter 3 times leaves it at 3", func(t *testing.T) {
		counter := NewCounter()
		counter.Increment()
		counter.Increment()
		counter.Increment()
		assertValue(t, counter, 3)
	})

	t.Run("it runs safely concurrently", func(t *testing.T) {
		counter := NewCounter()
		wantedCount := 1000
		var wg sync.WaitGroup
		wg.Add(wantedCount)
		for range wantedCount {
			go func() {
				counter.Increment()
				wg.Done()
			}()
		}
		wg.Wait()
		assertValue(t, counter, wantedCount)
	})
}

// passing counter as a pointer to avoid copying
func assertValue(t *testing.T, counter *Counter, expected int) {
	t.Helper()
	if counter.Value() != expected {
		t.Errorf("expected %d, got %d", expected, counter.Value())
	}
}
