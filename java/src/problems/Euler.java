package problems;

public class Euler {

  public static void main(String[] args) {

    ProblemSet problems = new ProblemSet();

    System.out.println("Problem 1: " + problems.problem001(3, 5, 1000));
    System.out.println("Problem 2: " + problems.problem002(2, 4000000));
    System.out.println("Problem 3: " + problems.problem003(600851475143L));
    System.out.println("Problem 4: " + "---");
    System.out.println("Problem 5: " + problems.problem005(20));
  }
}
