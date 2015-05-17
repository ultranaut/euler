/* jshint node:true */
'use strict';

/**
 * Problem 15: Lattice paths
 *
 * Starting in the top left corner of a 2×2 grid, and only being able
 * to move to the right and down, there are exactly 6 routes to the
 * bottom right corner.
 *
 * How many such routes are there through a 20×20 grid?
 */

/*
 * hmmm, looks like Pascal's triangle, rotated slightly...
 *
 *        0     1     2     3     4     5     6
 *      --------------------------------------------
 *    0 |  1  —  1  —  1  —  1  —  1  —  1  —  1
 *      |  |     |     |     |     |     |     |
 *    1 |  1  —  2  —  3  —  4  —  5  —  6  —  7
 *      |  |     |     |     |     |     |     |
 *    2 |  1  —  3  —  6  — 10  — 15  — 21  — 28
 *      |  |     |     |     |     |     |     |
 *    3 |  1  —  4  — 10  — 20  — 35  — 56  — 84
 *      |  |     |     |     |     |     |     |
 *    4 |  1  —  5  — 15  — 35  — 70  — 126 — 210
 *      |  |     |     |     |     |     |     |
 *    5 |  1  —  6  — 21  — 56  — 126 — 252 — 462
 *      |  |     |     |     |     |     |     |
 *    6 |  1  —  7  — 28  — 84  — 210 — 462 — 924
 *      |
 */

function nPr(n, r) {
  if (r > n || r < 0) {
    return 0;
  }
  if (r === 0 || r === n) {
    return 1;
  }
  var numerator = 1;
  var denominator = 1;
  var i;
  for (i = n - r + 1; i <= n; i++) {
    numerator *= i;
  }
  for (i = 1; i <= r; i++) {
    denominator *= i;
  }
  return numerator / denominator;
}

/*
 * O(m + n)
 */
function combinatorialLatticePath(m, n) {
  return nPr(m+n, n);
}

/*
 * O(m * n)
 */
function iterativeLatticePath(m, n) {
  var lattice = [];
  var sum;
  for (var i = 0; i <= m; i++) {
    lattice[i] = [];
    for (var j = 0; j <= n; j++) {
      if (j === 0) {
        sum = 1;
      }
      else if (i-1 in lattice) {
        sum = lattice[i][j-1] + lattice[i-1][j];
      }
      else {
        sum = lattice[i][j-1];
      }
      lattice[i][j] = sum;
    }
  }
  return lattice[m][n];
}

/*
 * O((m * n)!) or something similarly awful
 */
function recursiveLatticePath(m, n) {
  if (m === 0 || n === 0) {
    return 1;
  }
  else {
    return recursiveLatticePath(m-1, n) + recursiveLatticePath(m, n-1);
  }
}

module.exports = {
  nPr: nPr,
  latticePath: combinatorialLatticePath
  // latticePath: iterativeLatticePath
  // latticePath: recursiveLatticePath
};
