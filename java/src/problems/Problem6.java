package problems;

/**
 * Problem 6: Sum square difference
 *
 * The sum of the squares of the first ten natural numbers is,
 *
 *     1^2 + 2^2 + ... + 10^2 = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *
 *     (1 + 2 + ... + 10)^2 = 55^2 = 3025
 *
 * Hence the difference between the sum of the squares of the first
 * ten natural numbers and the square of the sum is
 *
 *     3025 − 385 = 2640.

 * Find the difference between the sum of the squares of the first
 * one hundred natural numbers and the square of the sum.
 *
 * @author John Shearer
 *
 */
public class Problem6 extends EulerProblem {
  public static int problemNumber = 6;
  public static String title = "Sum square difference";
  public static String instructions =
      "The sum of the squares of the first ten natural numbers is,\n\n" +

      "    1^2 + 2^2 + ... + 10^2 = 385\n\n" +

      "The square of the sum of the first ten natural numbers is,\n\n" +

      "    (1 + 2 + ... + 10)^2 = 55^2 = 3025\n\n" +

      "Hence the difference between the sum of the squares of the first\n" +
      "ten natural numbers and the square of the sum is\n\n" +

      "    3025 − 385 = 2640\n\n" +

      "Find the difference between the sum of the squares of the first\n" +
      "one hundred natural numbers and the square of the sum.";

  // instance properties
  int n;

  public Problem6() {
    this(100);
  }

  public Problem6(int n) {
    this.n = n;
  }

  @Override
  public String toString() {
    return this.toString(problemNumber, title, instructions);
  }

  @Override
  public Object solve() {
    long sumOfSquares = 0;
    long sumOfAll = 0;
    long squareOfSum = 0;

    /*
     * brute force approach, O(n) runtime...
     *
     *   for (int i = 1; i <= n; i++) {
     *     sumOfAll += i;
     *     sumOfSquares += (long)Math.pow(i, 2);
     *   }
     *

     * however, both sums can be directly computed, O(1) runtime:
     */
    sumOfAll = n * (n + 1) / 2;
    sumOfSquares = n*(n + 1)*(2*n + 1) / 6;

    squareOfSum = (long)Math.pow(sumOfAll, 2);


    return squareOfSum - sumOfSquares;
  }

}
