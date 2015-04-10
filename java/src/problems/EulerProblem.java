package problems;

public abstract class EulerProblem {
  public class Problem2 {

  }

  public static int problemNumber;
  public static String title;
  public static String instructions;
  
  /**
   * Constructor
   */
  public EulerProblem() {}

  @Override
  public abstract String toString();
  
  protected String toString(int problemNumber, String title, String instructions) {
    StringBuilder result = new StringBuilder();
    String NEW_LINE = System.getProperty("line.separator");
    
    result.append("Problem " + problemNumber + ": " + title + NEW_LINE);
    result.append(instructions);
    
    return result.toString();
  }
  
  /**
   * @return Solution to problem
   */
  public abstract Object solve();

}
