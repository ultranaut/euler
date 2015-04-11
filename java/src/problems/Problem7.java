package problems;

import lib.PrimesGenerator;

/**
 * Problem 7: 10001st prime
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we
 * can see that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 *
 * @author John Shearer
 *
 */
public class Problem7 extends EulerProblem {
  public static int problemNumber = 7;
  public static String title = "10001st prime";
  public static String instructions =
      "By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, \n" +
      "we can see that the 6th prime is 13\n." +
      "\n"                                     +
      "What is the 10,001st prime number?";
  
  // instance properties
  private int n;
  
  public Problem7() {
    this(10001);
  }
  
  public Problem7(int n) {
    this.n = n;
  }

  @Override
  public String toString() {
    return this.toString(problemNumber, title, instructions);
  }

  @Override
  public Object solve() {
    // The primes generator in lib does all the work
    PrimesGenerator primes = new PrimesGenerator();
    return primes.get(n);
  }

}
