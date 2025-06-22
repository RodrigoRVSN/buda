package blogpost_test // we use just exported methods

import (
	"reflect"
	"testing"
	"testing/fstest"

	blogpost "github.com/rodrigorvsn/go-with-tests/15_reading_files"
)

func TestNewblogpost(t *testing.T) {
	const (
		firstBody = `Title: Post 1
Description: Description 1
Tags: TDD, Go
---
Hello
World`
		secondBody = `Title: Post 2
Description: Description 2
Tags: rust, borrow-checker
---
B
L
M`
	)
	fs := fstest.MapFS{
		"hello world.md":  {Data: []byte(firstBody)},
		"hello-world2.md": {Data: []byte(secondBody)},
	}
	posts, err := blogpost.NewPostsFromFS(fs)
	if err != nil {
		t.Fatal(err)
	}

	if len(posts) != len(fs) {
		t.Errorf("got %d posts, wanted %d posts", len(posts), len(fs))
	}

	assertPost(t, posts[0], blogpost.Post{Title: "Post 1", Description: "Description 1", Tags: []string{"TDD", "Go"}, Body: `Hello
World`})
}

func assertPost(t *testing.T, got blogpost.Post, want blogpost.Post) {
	t.Helper()
	if !reflect.DeepEqual(got, want) {
		t.Errorf("got %+v, want %+v", got, want)
	}
}
