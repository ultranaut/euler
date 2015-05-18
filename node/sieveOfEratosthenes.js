/* jshint node:true, bitwise:false */
'use strict';

var _sieve = [];

/**
 * Sieve of Eratosthenes
 */
function sift(max) {
  // TODO: should be able to extend rather than rebuild
  if (max > _sieve.length) {
    _sieve = [];
    _sieve.length = max + 1;

    // 0 and 1 are not prime numbers
    _sieve[0] = _sieve[1] = false;
    for (var i = 2; i < max + 1; i++) {
      if (typeof _sieve[i] === 'undefined') {
        _sieve[i] = true;
        for (var j = i*i; j < max + 1; j += i) {
          _sieve[j] = false;
        }
      }
    }
  }
  return _sieve.slice(0, max + 1);
}

var SieveOfEratosthenes = {
  sift: sift
};

module.exports = SieveOfEratosthenes;
