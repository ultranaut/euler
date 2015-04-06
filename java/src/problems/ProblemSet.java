package problems;

public class ProblemSet {
  /**
   *
   * @param m1
   * @param m2
   * @param ceiling
   * @return
   */
  public int problem001(int m1, int m2, int ceiling) {
    /*
     * Problem 1: Multiples of 3 and 5
     *
     * If we list all the natural numbers below 10 that are multiples of
     * 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
     *
     * Find the sum of all the multiples of 3 or 5 below 1000.
     *
     */


    /* The naive method would be to iterate through each integer less
     * than 1000 and keep a running total of all that are evenly
     * divisible by either 3 or 5, with O(n) running time.
     *
     * A better approach is to compute the answer as the sum of
     * arithmetic series, i.e. the sum of the multiples of three plus
     * the sum of the multiples of 5. However, any integers that are
     * multiples of 15 will have been added twice, so we need to
     * subtract that sum
     */

    return arithmeticSum(m1, ceiling)
         + arithmeticSum(m2, ceiling)
         - arithmeticSum(m1 * m2, ceiling);

  }

  /*
   * Utility functions
   */

  /**
   *
   * @param step
   * @param ceiling
   * @return
   */
  private int arithmeticSum(int step, int ceiling) {
    int count = (ceiling - 1) / step;
    int largestMultiple = count * step;
    return (largestMultiple + step) * count / 2;
  }

}
