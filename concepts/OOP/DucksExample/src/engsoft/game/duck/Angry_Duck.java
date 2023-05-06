package engsoft.game.duck;

public class Angry_Duck extends Duck implements Pattern_Croak {
	public Angry_Duck() {
		// Composition: Composes the behavior of the duck using the instance of the
		// Flyable_Wing
		setBehavior(new Flyable_Wing());
	}

	// Inheritance: inherits the super class Duck
	public String show() {
		return "I'm the angry duck.";
	}

	// Polimorfismo: Implementa o metodo quack da interface Padrao_quack
	public String quack() {
		return "Que-Que. Grrrrrrrrr.";
	}

}
