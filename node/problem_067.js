/**
 * By starting at the top of the triangle below and moving to adjacent
 * numbers on the row below, the maximum total from top to bottom is 23.

 *                  3
 *                7   4
 *              2   4   6
 *            8   5   9   3

 * That is, 3 + 7 + 4 + 9 = 23.

 * Find the maximum total from top to bottom in triangle.txt
 * [https://projecteuler.net/project/resources/p067_triangle.txt], a
 * 15K text file containing a triangle with one-hundred rows.

 * NOTE: This is a much more difficult version of Problem 18. It is not
 * possible to try every route to solve this problem, as there are 2^99
 * altogether! If you could check one trillion (10^12) routes every
 * second it would take over twenty billion years to check them all.
 * There is an efficient algorithm to solve it. ;o)
 */

// same problem as #18, just a larger dataset
const maxPath = require('./problem_018');
const data = require('./data/problem_067');

module.exports = {
  maxPath,
  data,
};
