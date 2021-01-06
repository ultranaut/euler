/* jshint node: true */

/**
 * Problem 28: Number spiral diagonals
 * Starting with the number 1 and moving to the right in a clockwise
 * direction a 5 by 5 spiral is formed as follows:
 *
 *     21 22 23 24 25
 *     20  7  8  9 10
 *     19  6  1  2 11
 *     18  5  4  3 12
 *     17 16 15 14 13
 *
 * It can be verified that the sum of the numbers on the diagonals is
 * 101.
 *
 * What is the sum of the numbers on the diagonals in a 1001 by 1001
 * spiral formed in the same way?
 *
 */

/*
 * For a n x n spiral, the four corners are
 *
 *    n^2,
 *    n^2 -  (n - 1),
 *    n^2 - 2(n - 1), and
 *    n^2 - 3(n - 1)
 *
 * moving counterclockwise, the sum of which simplifies to:
 *
 *    4n^2 - 6(n - 1)
 *
 * Since the sum of the diagonals is the sum of the four corners (as
 * given above) plus the sum of the diagonals of the n-2 spiral, the
 * answer can be done recursively
 *
 */
const spiralSum = (n) => {
  if (n < 2) {
    return n;
  }
  const cornerSum = 4 * (n * n) - 6 * (n - 1);
  return cornerSum + spiralSum(n - 2);
};

module.exports = spiralSum;
