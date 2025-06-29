package server

import (
	"bufio"
	"io"
	"strings"
)

type CLI struct {
	playerStore PlayerStore
	input       *bufio.Scanner
}

func NewCLI(store PlayerStore, input io.Reader) *CLI {
	return &CLI{
		playerStore: store,
		input:       bufio.NewScanner(input),
	}
}

func (cli *CLI) PlayPoker() {
	userInput := cli.readLine()
	cli.playerStore.RecordWin(extractWinner(userInput))
}

func extractWinner(userInput string) string {
	return strings.Replace(userInput, " wins", "", 1)
}

func (cli *CLI) readLine() string {
	cli.input.Scan()
	return cli.input.Text()
}
