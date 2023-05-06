package engsoft.game.duck;

// Interface definition: defines the contract for the classes that implement it
public class Rocket_Fly implements Pattern_Flyable {
	private double velocity;

	public Rocket_Fly() {
		velocity = 1000;
	}

	// Pholymorphism: implements the method defined by the interface
	public String fly() {
		return "Flying like a rocket. Speed: " + getVelocity();
	}

	// Pholymorphism: implements the method defined by the interface
	public double getVelocity() {
		return velocity;
	}
}
