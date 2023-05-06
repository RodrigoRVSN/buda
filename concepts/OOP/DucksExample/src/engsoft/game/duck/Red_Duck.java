package engsoft.game.duck;

public class Red_Duck extends Duck implements Pattern_Croak {
	public Red_Duck() {
		// Composition: Composes the behavior of the duck using the instance of the
		// Flyable_Wing
		setBehavior(new Flyable_Wing());
	}

	// Inheritance: inherits the super class Duck
	public String show() {
		return "Eu sou o Pato Ruivo.";
	}

	// Pholymorphism: implements the quack method of the Pattern_Quack interface
	public String quack() {
		return "Que-Que.";
	}
}
