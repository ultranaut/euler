/* jshint node: true */

/**
 * Problem 9: Special Pythagorean triplet
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c,
 * for which,
 *
 *     a^2 + b^2 = c^2
 *
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 *
 */

var exports = module.exports = (function () {
  /**
   * Given a number `n`, find all Pythagorean triples `a, b, c` such that
   *
   *     a + b + c = n, and
   *     a <= b < c
   *
   * The runtime is polynomial, with Of(n) = n^3 (? n^2?). Doesn't scale
   * very well.
   *
   */
  function findTriplets(n) {
    var triples = [];

    // c can't account for more than half of the sum, because triangles
    for (var c = Math.floor(n/2); c > 0; c--) {
      // if we get to b < c/2, then we're not going to find a triple,
      var lowLimit = c / 2;
      for (var b = c - 1; b >= lowLimit; b--) {
        var a = n - (c + b);
        if (a*a === c*c - b*b) {
          triples.push([a, b, c]);
          break;
        }
      }
    }
    return triples;
  }

  return findTriplets;
}());
