package main

import (
	"log"
	"net/http"

	server "github.com/rodrigorvsn/go-with-tests/24_http_server"
)

const dbFileName = "db.json"

func main() {
	store, close, err := server.FileSystemPlayerStoreFromFile(dbFileName)
	if err != nil {
		log.Fatal(err)
	}
	defer close()

	server := server.NewPlayerServer(store)
	log.Fatal(http.ListenAndServe(":5000", server))
}
