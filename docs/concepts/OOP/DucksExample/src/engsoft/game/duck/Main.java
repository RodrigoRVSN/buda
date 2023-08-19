package engsoft.game.duck;

public class Main {

	public static void main(String[] args) {

		// Delegate: instantiating an object of the class Red_Duck, in a variable of
		// abstract Duck class and delegating to the class Red_Duck implement
		Duck pt = new Red_Duck();

		System.out.println(pt.show());
		System.out.println(pt.swim());
		System.out.println(pt.duck_behavior());

		pt.setBehavior(new Rocket_Fly());

		System.out.println(pt.duck_behavior());

	}

}
