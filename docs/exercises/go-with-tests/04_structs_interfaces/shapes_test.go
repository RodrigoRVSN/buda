package structs_interfaces

import (
	"testing"
)

func TestShapes(t *testing.T) {
	areaTests := []struct {
		name  string
		shape Shape
		want  float64
	}{
		{name: "Rectangle", shape: Rectangle{10, 10}, want: 40},
		{name: "Circle", shape: Circle{5}, want: 78.53981633974483},
		{name: "Triangle", shape: Triangle{12, 6}, want: 36},
	}

	for _, test := range areaTests {
		t.Run(test.name, func(t *testing.T) {
			got := test.shape.Area()
			if got != test.want {
				t.Errorf("%#v got %g, want %g", test.shape, got, test.want)
			}
		})
	}
}
