package walk

import (
	"reflect"
	"testing"
)

type Person struct {
	Name    string
	Profile Profile
}

type Profile struct {
	Age  int
	City string
}

func TestWalk(t *testing.T) {
	cases := []struct {
		Name          string
		Input         interface{}
		ExpectedCalls []string
	}{
		{
			"struct with one string field",
			struct {
				Name string
			}{"Chris"},
			[]string{"Chris"},
		},
		{
			"struct with two string fields",
			struct {
				Name string
				City string
			}{"Chris", "London"},
			[]string{"Chris", "London"},
		},
		{
			"struct with non string fields",
			struct {
				Name string
				Age  int
			}{"Chris", 18},
			[]string{"Chris"},
		},
		{
			"nested fields",
			Person{"Chris", Profile{13, "London"}},
			[]string{"Chris", "London"},
		},
		{
			"pointer to things",
			&Person{"Chris", Profile{13, "London"}},
			[]string{"Chris", "London"},
		},
		{
			"slices",
			[]Profile{{33, "London"}, {22, "Parana"}},
			[]string{"London", "Parana"},
		},
		{
			"arrays",
			[2]Profile{{33, "London"}, {22, "Parana"}},
			[]string{"London", "Parana"},
		},
	}

	for _, test := range cases {
		t.Run(test.Name, func(t *testing.T) {
			var got []string
			walk(test.Input, func(input string) {
				got = append(got, input)
			})

			if !reflect.DeepEqual(got, test.ExpectedCalls) {
				t.Errorf("got %v, want %v", got, test.ExpectedCalls)
			}
		})
	}

	t.Run("with maps", func(t *testing.T) {
		aMap := map[string]string{"Cow": "Moo", "Sheep": "Beeeeee"}
		var got []string

		walk(aMap, func(input string) {
			got = append(got, input)
		})

		assertContains(t, got, "Moo")
		assertContains(t, got, "Beeeeee")
	})

	t.Run("with channels", func(t *testing.T) {
		aChannel := make(chan Profile)
		go func() {
			aChannel <- Profile{33, "Berlin"}
			aChannel <- Profile{22, "Brazil"}
			close(aChannel) // stay in loop if not closed
		}()
		var got []string
		want := []string{"Berlin", "Brazil"}

		walk(aChannel, func(input string) {
			got = append(got, input)
		})

		if !reflect.DeepEqual(got, want) {
			t.Errorf("got %v, want %v", got, want)
		}
	})

	t.Run("with function", func(t *testing.T) {
		aFunction := func() (Profile, Profile) {
			return Profile{33, "Berlin"}, Profile{22, "Brazil"}
		}
		var got []string
		want := []string{"Berlin", "Brazil"}

		walk(aFunction, func(input string) {
			got = append(got, input)
		})

		if !reflect.DeepEqual(got, want) {
			t.Errorf("got %v, want %v", got, want)
		}
	})
}

func assertContains(t testing.TB, haystack []string, needle string) {
	t.Helper()
	contains := false
	for _, value := range haystack {
		if value == needle {
			contains = true
		}
	}
	if !contains {
		t.Errorf("expected %v to contain %q, but it didn't", haystack, needle)
	}
}
