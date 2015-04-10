package main;

import problems.*;

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

    // Problem 1
    Problem1 p1 = new Problem1();
    System.out.println(p1);
    System.out.println("\n  Answer: " + p1.solve());

    printRule();

    // Problem 2
    Problem2 p2 = new Problem2();
    System.out.println(p2);
    System.out.println("\n  Answer: " + p2.solve());

    printRule();

    // Problem 3
    Problem3 p3 = new Problem3();
    System.out.println(p3);
    System.out.println("\n  Answer: " + p3.solve());

    printRule();

    // Problem 5
    Problem5 p5 = new Problem5();
    System.out.println(p5);
    System.out.println("\n  Answer: " + p5.solve());

    printRule();

    // Problem 6
    Problem6 p6 = new Problem6();
    System.out.println(p6);
    System.out.println("\n  Answer: " + p6.solve());

    printRule();

    // Problem 8
    Problem8 p8 = new Problem8();
    System.out.println(p8);
    System.out.println("\n  Answer: " + p8.solve());

    printRule();

  }
}
