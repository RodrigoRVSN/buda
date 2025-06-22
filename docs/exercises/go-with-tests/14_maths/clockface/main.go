package main

import (
	"os"
	"time"

	"github.com/rodrigorvsn/go-with-tests/14_maths/svg"
)

func main() {
	t := time.Now()
	svg.Write(os.Stdout, t)
}
