package engsoft.game.duck;

// Interface definition: defines the contract for the classes that implement it
public class Flyable_Wing implements Pattern_Flyable {
	private double velocity;

	public Flyable_Wing() {
		velocity = 10;
	}

	// Pholymorphism: implements the method defined by the interface
	public String fly() {
		return "Flying like a bird. Speed: " + getVelocity();
	}

	// Polimorfismo: implementa o metodo definido pela interface
	public double getVelocity() {
		return velocity;
	}

}
