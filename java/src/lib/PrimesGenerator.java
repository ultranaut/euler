package lib;

import java.util.ArrayList;


public class PrimesGenerator {
  @SuppressWarnings("serial")
  private ArrayList<Long> primes = new ArrayList<Long>() {
    {
      add(2L);
      add(3L);
    }
  };
  // n is the index of the nth prime in `primes` (zero indexed)
  private int nextIndex = 0;

  public Long next() {
    Long nextPrime = get(this.nextIndex, true);
    nextIndex++;
    return nextPrime;
  }

  /**
   * @param targetIndex
   * @return The nth prime number
   */
  public Long get(int targetIndex) {
    // Since the `primes` array is 0-indexed but we want to allow
    // outside users to request the nth prime in a user-friendly way,
    // this will "translate" their requested index into it's proper
    // form.
    return this.get(targetIndex - 1, true);
  }

  /**
   * `internal` flag just allows this to have a different signature
   * and so this can be private (I suppose I could've just given it a
   * different name).
   */
  private Long get(int targetIndex, boolean internal) {
    // if it's not already in the `primes` array calculate it
    if (targetIndex >= primes.size()) {
      Long candidate = this.last();

      // add elements to `primes` until we reach our target
      while (targetIndex > primes.size() - 1) {
        // iteratively check candidates for primality
        while (true) {
          candidate += 2;
          // assume that it's prime until proven otherwise
          boolean isPrime = true;
          for (Long p : primes) {

            // if we've reached this point, it's prime
            if (p > Math.sqrt(candidate)) {
              break;
            }

            // if it's evenly divisible by p, it's not prime
            if (candidate % p == 0) {
              isPrime = false;
              break;
            }
          }
          // at this point, either we've run out of prime to test
          // against or we've already determined it's not prime
          if (isPrime) {
            primes.add(candidate);
            break;
          }
        }  // `primes` size increased by 1
      }    // target index reached

    }
    return primes.get(targetIndex);
  }

  private Long last() {
    return primes.get(primes.size() - 1);
  }
}
