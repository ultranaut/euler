/* jshint node:true, bitwise:false */
/**
 * Problem 35: Circular primes
 *
 * The number, 197, is called a circular prime because all rotations of
 * the digits: 197, 971, and 719, are themselves prime.
 *
 * There are thirteen such primes below 100:
 *
 *     2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97
 *
 * How many circular primes are there below one million?
 */
var Primes = require('./lib/primes');

function rotate(n) {
  var rotations = [n];
  var magnitude = Math.log10(n) | 0;
  // Any numbers that have any digits other than 1, 3, 7, and 9
  // won't pass the test
  var allow = [
    false,
    true,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    true
  ];
  for (var i = 0; i < magnitude; i++) {
    var lsd = n % 10;                     // get the ones digit
    if (!allow[lsd]) {
      return [];
    }
    n = (n - lsd) / 10;                   // 'pull it off'
    n += lsd * Math.pow(10, magnitude);   // slap it on the front
    rotations.push(n);
  }
  return rotations.sort();
}

function dedupe(list) {
  var i = 1;
  while(i < list.length) {
    if (list[i] === list[i-1]) {
      list.splice(i, 1);
    }
    else {
      i++;
    }
  }
  return list;
}

function circularPrimes(max) {
  var sieve = Primes.sieve(max);
  var list = Primes.list(max);
  var circulars = [];
  for (var i = 0; i < list.length; i++) {
    var rotations = dedupe(rotate(list[i]));
    if (rotations.length > 0) {
      var addSet = true;
      for (var j = 0; j < rotations.length; j++) {
        var candidate = rotations[j];
        if (sieve[candidate] === true) {
          // remove from the sieve so we don't double count it
          sieve[candidate] = false;
        }
        else {
          addSet = false;
          break;
        }
      }
      if (addSet === true) {
        circulars = circulars.concat(rotations);
      }
    }
  }
  return circulars.length;
}

module.exports = {
  circularPrimes: circularPrimes,
  rotate: rotate,
  dedupe: dedupe
};
