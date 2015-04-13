package lib;

public class CollatzSequence {
  
  public int run(long start) {
    int count = 1;
    while (start > 1) {
      if (start % 2 == 0) {
        start /= 2;
      }
      else {
        start = start*3 + 1;
      }
      count++;
    }
    return count;
  }
}
