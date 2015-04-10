package problems;

/**
 * Problem 2: Even Fibonacci numbers
 *
 * Each new term in the Fibonacci sequence is generated by adding
 * the previous two terms. By starting with 1 and 2, the first 10
 * terms will be:
 *
 *     1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose values
 * do not exceed four million, find the sum of the even-valued
 * terms.
 *
 * @author John Shearer
 *
 */

public class Problem2 extends EulerProblem {
  public static int problemNumber = 2;
  public static String title = "Even Fibonacci numbers";
  public static String instructions =
      "Each new term in the Fibonacci sequence is generated by adding\n" +
      "the previous two terms. by starting with 1 and 2, the first 10\n" +
      "terms will be:\n\n" +

      "    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...\n\n" +

      "By considering the terms in the Fibonacci sequence whose values\n" +
      "do not exceed four million, find the sum of the even-valued\n" +
      "terms.";

  private int divisor;
  private int ceiling;

  /**
   * Euler Problem 2 class
   */
  public Problem2() {
    this(2, 4000000);
  }

  /**
   * @param divisor Multiples of which will be summed
   * @param ceiling Upper limit on terms to sum
   */
  public Problem2(int divisor, int ceiling) {
    this.divisor = divisor;
    this.ceiling = ceiling;
  }

  @Override
  public String toString() {
    return this.toString(problemNumber, title, instructions);
  }

  /**
   * @see problems.EulerProblem#solve()
   *
   * @return Sum of Fibonacci numbers
   */
  public Object solve() {
    // TODO Make Fibonacci generator
    int sum = 0;
    int nLess2 = 0;
    int nLess1 = 1;
    while (true) {
      nLess1 += nLess2;
      nLess2 = nLess1 - nLess2;
      if (nLess1 > ceiling) {
        break;
      }
      if (nLess1 % divisor == 0) {
        sum += nLess1;
      }
    }

    return sum;
  }
}
