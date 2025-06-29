package main

import (
	"log"
	"net/http"
	"os"

	server "github.com/rodrigorvsn/go-with-tests/24_http_server"
)

const dbFileName = "db.json"

func main() {
	db, err := os.OpenFile(dbFileName, os.O_RDWR|os.O_CREATE, 0666)
	if err != nil {
		log.Fatalf("problem opening %s %v", dbFileName, err)
	}

	store, err := server.NewFileSystemPlayerStore(db)
	if err != nil {
		log.Fatalf("problem creating player store %v", err)
	}

	server := server.NewPlayerServer(store)
	log.Fatal(http.ListenAndServe(":5000", server))
}
