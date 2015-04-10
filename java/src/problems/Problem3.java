package problems;

import lib.PrimesGenerator;

/**
 * Problem 3: Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 *
 * @author John Shearer
 *
 */

public class Problem3 extends EulerProblem {
  public static int problemNumber = 3;
  public static String title = "Largest prime factor";
  public static String instructions =
      "The prime factors of 13195 are 5, 7, 13 and 29.\n\n" +

      "What is the largest prime factor of the number 600851475143 ?";

  // instance properties
  private long number;

  /**
   * Euler Problem 3 class
   */
  public Problem3() {
    this(600851475143L);
  }

  public Problem3(long number) {
    this.number = number;
  }

  @Override
  public String toString() {
    return this.toString(problemNumber, title, instructions);
  }

  @Override
  public Object solve() {
    PrimesGenerator primes = new PrimesGenerator();
    Long factor = 1L;

    while (number > 1) {
      // get the next prime number
      factor = primes.next();

      // if the factor is larger than the square root of n, then n is prime
      // and we can just set factor to n
      if (factor > Math.sqrt(number)) {
        factor = number;
      }

      while (number % factor == 0) {
        number = number / factor;
      }
    }

    return factor;
  }
}
