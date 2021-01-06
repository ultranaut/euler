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

function findTriplets(n) {
  const triples = [];

  // c can't account for more than half of the sum, because triangles
  for (let c = Math.floor(n/2); c > 0; c--) {
    // if we get to b < c/2, then we're not going to find a triple
    for (let b = c - 1; b >= c / 2; b--) {
      const a = n - (c + b);
      if (a*a === c*c - b*b) {
        triples.push([a, b, c]);
        break;
      }
    }
  }
  return triples;
}

module.exports = findTriplets;
