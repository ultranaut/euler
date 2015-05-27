/* jshint node:true */
'use strict';

var Arithmetic = require('./lib/arithmetic');

/*
 * Problem 20: Factorial digit sum
 *
 * n! means n × (n − 1) × ... × 3 × 2 × 1
 *
 * For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 * and the sum of the digits in the number 10! is
 *
 *     3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 *
 * Find the sum of the digits in the number 100!
 */
function sumFactorialDigits(n) {
  var f = Arithmetic.factorial(n);
  return f.reduce(function (a, b) { return a + b; });
}

module.exports = {
  sumFactorialDigits: sumFactorialDigits
};
