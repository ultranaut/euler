package problems;

import java.util.ArrayList;

public class PrimesGenerator {
  public ArrayList<Long> primes = new ArrayList<Long>();
  private int i = 0;

  public PrimesGenerator() {
    this.primes.add(2L);
    this.primes.add(3L);
  }

  public Long next() {
    Long nextPrime;
    if (this.i < this.primes.size()) {
      nextPrime = primes.get(this.i);
    }
    else {
      Long n = this.primes.get(this.primes.size() - 1) + 2;
      while (true) {
        // assume that it's prime until proven otherwise
        boolean isPrime = true;
        for (Long p: this.primes) {

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
          this.primes.add(n);
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
