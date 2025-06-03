package dictionary

import "testing"

func TestSearch(t *testing.T) {
	dictionary := Dictionary{"test": "macarena"}

	t.Run("known word", func(t *testing.T) {
		want := "macarena"
		assertDefinition(t, dictionary, "test", want)
	})

	t.Run("unknown word", func(t *testing.T) {
		_, err := dictionary.Search("any")
		if err == nil {
			t.Fatal("expected error but didn't get one")
		}
		assertError(t, err, ErrNotFound)
	})
}

func TestAdd(t *testing.T) {
	t.Run("new word", func(t *testing.T) {
		dictionary := Dictionary{}
		dictionary.Add("add", "new word")
		want := "new word"
		got, _ := dictionary.Search("add")
		assertStrings(t, got, want)
	})

	t.Run("existing word", func(t *testing.T) {
		word := "add"
		definition := "new word"
		dictionary := Dictionary{word: definition}
		err := dictionary.Add(word, "another definition")
		assertError(t, err, ErrWordExists)
		assertDefinition(t, dictionary, word, definition)
	})
}

func TestUpdate(t *testing.T) {
	t.Run("update word", func(t *testing.T) {
		word := "update"
		definition := "new word"
		newDefinition := "updated definition"
		dictionary := Dictionary{word: definition}
		err := dictionary.Update(word, newDefinition)
		assertError(t, err, nil)
		assertDefinition(t, dictionary, word, newDefinition)
	})

	t.Run("new word", func(t *testing.T) {
		word := "word"
		definition := "new word"
		dictionary := Dictionary{}
		err := dictionary.Update(word, definition)
		assertError(t, err, ErrWordDoesNotExist)
	})
}

func TestDelete(t *testing.T) {
	t.Run("existing word", func(t *testing.T) {
		word := "test"
		dictionary := Dictionary{word: "test"}
		err := dictionary.Delete(word)
		assertError(t, err, nil)
		_, err = dictionary.Search(word)
		assertError(t, err, ErrNotFound)
	})

	t.Run("non-existing word", func(t *testing.T) {
		dictionary := Dictionary{}
		err := dictionary.Delete("test")
		assertError(t, err, ErrWordDoesNotExist)
	})
}

func assertDefinition(t *testing.T, dictionary Dictionary, word, definition string) {
	t.Helper()
	got, err := dictionary.Search(word)
	if err != nil {
		t.Fatalf("expected no error but got %q", err)
	}
	assertStrings(t, got, definition)
}

func assertStrings(t *testing.T, got, want string) {
	t.Helper()
	if got != want {
		t.Errorf("got %q, want %q", got, want)
	}
}

func assertError(t *testing.T, got, want error) {
	t.Helper()
	if got != want {
		t.Errorf("got %q, want %q", got, want)
	}
}
