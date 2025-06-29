package main

import (
	"fmt"
	"log"
	"os"

	server "github.com/rodrigorvsn/go-with-tests/24_http_server"
)

const dbFileName = "db.json"

func main() {
	fmt.Println("Let's play poker")
	fmt.Println("Type {Name} wins to record a win")

	store, close, err := server.FileSystemPlayerStoreFromFile(dbFileName)
	if err != nil {
		log.Fatal(err)
	}
	defer close()

	server.NewCLI(store, os.Stdin).PlayPoker()
}
