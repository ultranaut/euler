/* jshint node:true */
'use strict';

/*
 * Math grade-school style
 *
 * hack way to deal with numbers that will end up getting large
 */

/* *** helper functions ********************************************* */
function _cleanUp(arr) {
  while (arr[arr.length - 1] === 0) {
    arr.pop();
  }
  return arr;
}

function _carry(arr, start) {
  // do carries until there are no more
  for (var i = start; i < arr.length; i++) {
    if (arr[i] < 10) {
      break;
    }
    arr[i + 1]  += Math.floor(arr[i] / 10);
    arr[i] = arr[i] % 10;
  }
}

/* *** for export *************************************************** */

/**
 * Break a number up into its digits
 *
 */
function digitize(n) {
  // if it's already an array, return it
  if (Array.isArray(n)) {
    return n;
  }

  n = Math.abs(n);
  var digits = [];
  while (true) {
    digits.push(n % 10);
    if (n < 10) {
      break;
    }
    n = Math.floor(n / 10);
  }

  return digits;
}

function add(a, b) {
  var digitsA = digitize(a);
  var digitsB = digitize(b);

  var magA = digitsA.length;
  var magB = digitsB.length;

  var sum = Array.apply(null, new Array(magA + magB))
                 .map(function () { return 0; });

  for (var i = 0; i < magA || i < magB; i++) {
    if (digitsA[i] !== undefined) {
      sum[i] += digitsA[i];
    }
    if (digitsB[i] !== undefined) {
      sum[i] += digitsB[i];
    }
    _carry(sum, i);
  }
  return _cleanUp(sum);
}

function multiply(a, b) {
  var digitsA = digitize(a);
  var digitsB = digitize(b);
  var magA = digitsA.length;
  var magB = digitsB.length;
  // create an array of proper size with all 0's
  var product = Array.apply(null, new Array(magA + magB))
                     .map(function () { return 0; });
  for (var i = 0; i < magA; i++) {
    var partial;
    for (var j = 0; j < magB; j++) {
      partial = digitsA[i] * digitsB[j];
      product[i + j] += partial;

      _carry(product, i+j);
    }
  }
  return _cleanUp(product);
}

function factorial(n) {
  var fact = digitize(1);
  for (var i = 2; i <= n; i++) {
    fact = multiply(fact, i);
  }
  return fact;
}

module.exports = {
  digitize: digitize,
  add: add,
  multiply: multiply,
  factorial: factorial,
};

