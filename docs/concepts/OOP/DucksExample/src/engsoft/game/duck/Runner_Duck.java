package engsoft.game.duck;

public class Runner_Duck extends Duck implements Pattern_Run {
  public String show() {
    return "I'm the Runner Duck.";
  }

  public String run() {
    return "The Runner Duck is running.";
  }
}
