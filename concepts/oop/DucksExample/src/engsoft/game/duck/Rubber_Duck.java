package engsoft.game.duck;

// Inheritance: inherits the super class Duck
public class Rubber_Duck extends Duck {
	public Rubber_Duck() {
		// Composition: Composes the behavior of the duck using the instance of the
		// No_Fly
		setBehavior(new No_Fly());
	}

	public String show() {
		return "Hello, I'm a Rubber Duck.";
	}
}
