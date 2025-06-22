package blog_renderer_test

import (
	"bytes"
	"testing"

	approvals "github.com/approvals/go-approval-tests"
	blog_renderer "github.com/rodrigorvsn/go-with-tests/16_templating"
)

func TestRender(t *testing.T) {
	aPost := blog_renderer.Post{
		Title:       "hello world",
		Body:        "This is a post",
		Description: "This is a description",
		Tags:        []string{"go", "tdd"},
	}

	postRenderer, err := blog_renderer.NewPostRenderer()
	if err != nil {
		t.Fatal(err)
	}

	t.Run("it converts a single post into HTML", func(t *testing.T) {
		buf := bytes.Buffer{}

		if err := postRenderer.Render(&buf, aPost); err != nil {
			t.Fatal(err)
		}

		approvals.VerifyString(t, buf.String()) // snapshot
	})

	t.Run("it renders an index of posts", func(t *testing.T) {
		posts := []blog_renderer.Post{{Title: "Hello World"}, {Title: "Hello World 2"}}
		buf := bytes.Buffer{}

		if err := postRenderer.RenderIndex(&buf, posts); err != nil {
			t.Fatal(err)
		}

		approvals.VerifyString(t, buf.String())
	})
}
