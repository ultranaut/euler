package lib;

import java.util.ArrayList;


public class PrimesGenerator {
  @SuppressWarnings("serial")
  private static ArrayList<Long> primes = new ArrayList<Long>() {
    {
      add(2L);
      add(3L);
    }
  };
  private int i = 0;

  public void reset() {
    i = 0;
  }

  public Long next() {
    Long nextPrime;
    if (this.i < PrimesGenerator.primes.size()) {
      nextPrime = primes.get(this.i);
    }
    else {
      Long n = PrimesGenerator.primes.get(PrimesGenerator.primes.size() - 1) + 2;
      while (true) {
        // assume that it's prime until proven otherwise
        boolean isPrime = true;
        for (Long p: PrimesGenerator.primes) {

          // it's prime
          if (p > Math.sqrt(n)) {
            break;
          }

          // it's not prime
          if (n % p == 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          PrimesGenerator.primes.add(n);
          nextPrime = n;
          break;
        }
        n += 2;
      }
    }
    this.i++;
    return nextPrime;
  }
}
