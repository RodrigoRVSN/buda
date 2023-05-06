package engsoft.game.duck;

// Abstract Class: Defines the base structure for the creation of other classes
public abstract class Duck {
	// Composition: Attribute that will be used by the class
	protected Pattern_Flyable duck_behavior;

	// Abstract method: needs to be implemented by the child classes
	abstract String show();

	// Concrete method: implemented and used by the classes
	public String swim() {
		return "Duck swimming";
	}

	// Delegate: Defines the behavior through the object received in the method
	public void setBehavior(Pattern_Flyable padrao) {
		duck_behavior = padrao;
	}

	// Pholimorfism: implements the method according to what was defined
	public String duck_behavior() {
		return duck_behavior.fly();
	}
}
