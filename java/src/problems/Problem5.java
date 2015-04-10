package problems;

import lib.PrimesGenerator;

/**
 * Problem 5: Smallest multiple
 *
 * 2520 is the smallest number that can be divided by each of the
 * numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by
 * all of the numbers from 1 to 20?
 *
 * @author John Shearer
 *
 */
public class Problem5 extends EulerProblem {
  public static int problemNumber = 5;
  public static String title = "Smallest multiple";
  public static String instructions =
      "2520 is the smallest number that can be divided by each of the\n" +
      "numbers from 1 to 10 without any remainder.\n\n" +

      "What is the smallest positive number that is evenly divisible by\n" +
      "all of the numbers from 1 to 20?";

  // instance properties
  int ceiling;

  /**
   * Euler Problem 5 class
   */
  public Problem5() {
    this(20);
  }

  public Problem5(int ceiling) {
    this.ceiling = ceiling;
  }

  @Override
  public String toString() {
    return this.toString(problemNumber, title, instructions);
  }

  @Override
  public Object solve() {
    PrimesGenerator primes = new PrimesGenerator();

    long product = 1;

    while (true) {
      long p = primes.next();
      if (p > ceiling) {
        break;
      }

      /*
       * First pass: for each of the primes p less than or equal to n,
       * see which of our numbers has the highest power of p as a
       * factor, and multiply the running product total by that amount
       */

      // // high-water mark of the exponent for our current prime
      // int exp = 0;

      // // cycle through each of the multiples of p up to n and check how
      // // many times p will go into it
      // for (long number = p; number < ceiling + 1; number += p) {
      //   int count = 0;

      //   while (number % Math.pow(p, count + 1) == 0) {
      //     count++;
      //   }
      //   if (count > exp) {
      //     exp = count;
      //   }
      // }


      /*
       * second go: way simpler, but only works if all of the numbers up
       * to n are used, i.e. it wouldn't work with some sub-set of
       * numbers, or an arbitrary set of numbers
       */

      int exp = (int)(Math.log(ceiling) / Math.log(p));



      product *= Math.pow(p, exp);
    }
    return product;
  }

}
