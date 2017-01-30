/* jshint node: true */

/**
 * Problem 30: Digit fifth powers
 * Surprisingly there are only three numbers that can be written as the
 * sum of fourth powers of their digits:
 *
 *     1634 = 1^4 + 6^4 + 3^4 + 4^4
 *     8208 = 8^4 + 2^4 + 0^4 + 8^4
 *     9474 = 9^4 + 4^4 + 7^4 + 4^4
 *
 * As 1 = 1^4 is not a sum it is not included.
 *
 * The sum of these numbers is 1634 + 8208 + 9474 = 19316.
 *
 * Find the sum of all the numbers that can be written as the sum of
 * fifth powers of their digits.
 */

var reload = require('mod-reload');
var arithmetic = require('./lib/arithmetic');

function numDigits(n) {
  return Math.floor(Math.log10(n)) + 1;
}

function upperLimit(exp) {
  var max = Math.pow(9, exp);
  var limit = 1;

  while (numDigits(limit * max) > limit) {
    limit++;
  }
  return limit * max;
}

function sumDigitPowers(n, exp) {
  var digits = arithmetic.digitize(n);
  var sum = digits.reduce(function(acc, curr) {
    return  acc + Math.pow(curr, exp);
  }, 0);
  return sum;
}

function digitPowers(exp) {
  var sum = 0;
  var limit = upperLimit(exp);
  for (var i = 2; i <= limit; i++) {
    if (sumDigitPowers(i, exp) === i) {
      sum += i;
    }
  }
  return sum;
}



module.exports = {
  digitPowers: digitPowers,
  reload: reload,
};





