package counter

import "sync"

// be careful with what we want to expose publicly.
// embedding mutex here could lead to issues with the lock
type Counter struct {
	mu    sync.Mutex
	value int
}

func NewCounter() *Counter {
	return &Counter{}
}

func (c *Counter) Increment() {
	c.mu.Lock() // handles goroutine safety
	defer c.mu.Unlock()
	c.value++
}

func (c *Counter) Value() int {
	return c.value
}
