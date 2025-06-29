package interactions

import (
	"testing"

	"github.com/rodrigorvsn/greet/specifications"
)

func TestGreet(t *testing.T) {
	specifications.GreetSpecification(t, specifications.GreetAdapter(Greet))
}
