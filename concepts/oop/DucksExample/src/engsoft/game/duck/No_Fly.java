package engsoft.game.duck;

// Interface definition: defines the contract for the classes that implement it
public class No_Fly implements Pattern_Flyable {
	public No_Fly() {
	}

	// Pholymorphism: implements the method defined by the interface that does not
	// fly
	public String fly() {
		return "This duck does not fly. Speed: " + getVelocity();
	}

	public double getVelocity() {
		return 0;
	}
}
