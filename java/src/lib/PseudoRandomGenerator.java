package lib;

/**
 * Implementation of the PRG described in problem 252
 */
public class PseudoRandomGenerator {
  private long seed = 290797;
  private long divisor = 50515093;

  public PseudoRandomGenerator() {
    this(290797, 50515093);
  }

  public PseudoRandomGenerator(long seed, long divisor) {
    this.seed = seed;
    this.divisor = divisor;
  }

  public long next() {
    long newSeed = (seed * seed) % divisor;
    long random = (newSeed % 2000) - 1000;
    seed = newSeed;
    return random;
  }

  public long[] get(int q) {
    long batch[] = new long[q];

    for (int i = 0; i < q; i++) {
      batch[i] = next();
    }

    return batch;
  }
}
