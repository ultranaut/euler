package problems;

public class ProblemSet {
  public int problem001(int m1, int m2, int ceiling) {
    /**
     * Problem 1: Multiples of 3 and 5
     * 
     * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and
     * 9. The sum of these multiples is 23.
     * 
     * Find the sum of all the multiples of 3 or 5 below 1000.
     * 
     */

    return arithmeticSum(m1, ceiling) 
         + arithmeticSum(m2, ceiling)
         - arithmeticSum(m1 * m2, ceiling);  

  }

  private int arithmeticSum(int step, int ceiling) {
    int count = (ceiling - 1) / step;
    int largestMultiple = count * step;
    return (largestMultiple + step) * count / 2;
  }
}
