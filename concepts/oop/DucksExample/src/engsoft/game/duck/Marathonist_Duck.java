package engsoft.game.duck;

public class Marathonist_Duck extends Duck implements Pattern_Run {
  public String show() {
    return "I am the Marathonist Duck.";
  }

  public String run() {
    return "The Marathonist Duck is running.";
  }
}
