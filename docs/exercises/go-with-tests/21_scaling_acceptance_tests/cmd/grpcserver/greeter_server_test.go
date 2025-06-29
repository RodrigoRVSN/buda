package main_test

import (
	"fmt"
	"testing"

	"github.com/rodrigorvsn/greet/adapters"
	"github.com/rodrigorvsn/greet/adapters/grpcserver"
	"github.com/rodrigorvsn/greet/specifications"
)

// will need to create a new driver to interact with the program
func TestGreeterServer(t *testing.T) {
	var (
		port   = "50051"
		driver = grpcserver.Driver{Addr: fmt.Sprintf("localhost:%s", port)}
	)
	adapters.StartDockerServer(t, port, "grpcserver")
	specifications.GreetSpecification(t, &driver)
}
