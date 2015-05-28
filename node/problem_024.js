/* jshint node:true */
'use strict';

/*
 * Problem 24: Lexicographic permutations
 *
 * A permutation is an ordered arrangement of objects. For example, 3124
 * is one possible permutation of the digits 1, 2, 3 and 4. If all of
 * the permutations are listed numerically or alphabetically, we call it
 * lexicographic order. The lexicographic permutations of 0, 1 and 2
 * are:
 *
 *     012   021   102   120   201   210
 *
 * What is the millionth lexicographic permutation of the digits
 * 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */

function factorial(n) {
  var retVal = 1;
  while (n > 1) {
    retVal *= n;
    n--;
  }
  return retVal;
}

function permutate(elements, acc, permutations) {
  acc = typeof acc === 'undefined' ? [] : acc;
  permutations = typeof permutations === 'undefined' ? [] : permutations;

  if (elements.length === 1) {
    acc.push(elements.shift());
    permutations.push(acc);
  }
  else {
    for (var i = 0; i < elements.length; i++) {
      var partial = acc.slice();
      partial.push(elements[i]);
      var subset = elements.slice();
      subset.splice(i, 1);

      permutate(subset, partial, permutations);
    }
  }
  return permutations;
}

function getNthPermutation(elements, n) {
  // need to make a copy of elements so as not to destroy it, and
  // make sure they're sorted
  elements = elements.slice().sort();
  // account for difference in 0- and 1-indexing
  n -= 1;

  var idx;
  var acc = '';
  var factor;
  while (elements.length > 0) {
    factor = factorial(elements.length - 1);
    idx = Math.floor(n/factor);
    acc += elements.splice(idx, 1);
    n -= idx*factor;
  }
  return acc;
}

module.exports = {
  getNthPermutation: getNthPermutation,
  permutate: permutate
};
