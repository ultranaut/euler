package main;

import java.math.BigInteger;
import java.util.BitSet;

import lib.SieveOfEratosthenes;
import problems.Problem1;
import problems.Problem11;
import problems.Problem2;
import problems.Problem3;
import problems.Problem5;
import problems.Problem6;
import problems.Problem7;
import problems.Problem8;

public class Euler {

  public static void printRule() {
    printRule('-');
  }

  public static void printRule(char character) {
    for (int i = 0; i < 80; i++) {
      System.out.print(character);
    }
    System.out.println("\n");
  }

  public static void main(String[] args) {

    /* --- Problem 1 ----------------------------------------------- */
    Problem1 p1 = new Problem1();
    System.out.println(p1);
    System.out.println("\n  Answer: " + p1.solve());

    printRule();

    /* --- Problem 2 ----------------------------------------------- */
    Problem2 p2 = new Problem2();
    System.out.println(p2);
    System.out.println("\n  Answer: " + p2.solve());

    printRule();

    /* --- Problem 3 ----------------------------------------------- */
    Problem3 p3 = new Problem3();
    System.out.println(p3);
    System.out.println("\n  Answer: " + p3.solve());

    printRule();

    /* --- Problem 5 ----------------------------------------------- */
    Problem5 p5 = new Problem5();
    System.out.println(p5);
    System.out.println("\n  Answer: " + p5.solve());

    printRule();

    /* --- Problem 6 ----------------------------------------------- */
    Problem6 p6 = new Problem6();
    System.out.println(p6);
    System.out.println("\n  Answer: " + p6.solve());

    printRule();

    /* --- Problem 7 ----------------------------------------------- */
    Problem7 p7 = new Problem7();
    System.out.println(p7);
    System.out.println("\n  Answer: " + p7.solve());

    printRule();

    /* --- Problem 8 ----------------------------------------------- */
    Problem8 p8 = new Problem8();
    System.out.println(p8);
    System.out.println("\n  Answer: " + p8.solve());

    printRule();

    /* --- Problem 11 ----------------------------------------------- */
    Problem11 p11 = new Problem11();
    System.out.println(p11);
    System.out.println("\n  Answer: " + p11.solve());

    printRule();

    /* --- Problem 10 ----------------------------------------------- */
    System.out.println("Problem 10");

    SieveOfEratosthenes sieve = new SieveOfEratosthenes(2000000);
    BitSet primes = sieve.get();
    long sum = 0;
    for (int i = 0; i < primes.length(); i++) {
      if (primes.get(i)) {
        sum += i;
      }
    }

    System.out.println(sum);
    printRule();
    
    /* --- Problem 12 ----------------------------------------------- */
    System.out.println("Problem 12");
    
    int i = 1;
    int triangle = 0;
    int count = 0;
    while (true) {
      triangle += i;
      
      // count both 1 and itself
      count = 2;
      for (int j = 2; j*j <= triangle; j++) {
        if (triangle % j == 0) {
          if (j * j == triangle) {
            count += 1;
          }
          else {
            count += 2;
          }
        }
      }
      if (count > 500) {
        System.out.println(triangle);
        break;
      }
      i++;
      //System.out.println(triangle + ": " + count);
      
    }

    printRule();

    /* --- Problem 16 ----------------------------------------------- */
    System.out.println("Problem 16");
    //long power = (long) Math.pow(2,  1001);
    BigInteger number = BigInteger.valueOf(2).pow(1000);
    final BigInteger ZERO = BigInteger.ZERO;
    final BigInteger TEN = BigInteger.TEN;
    int powerSum = 0;
    
    while (number.compareTo(ZERO) > 0) {
      powerSum += number.remainder(TEN).intValue();
      number = number.divide(TEN);
    }
    
    System.out.println(powerSum);
    

    printRule();

  }
}
