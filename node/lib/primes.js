/* jshint node:true, bitwise:false */
'use strict';
var SoE = require('./sieveOfEratosthenes');
var subList = require('./binarySearch').elementsLessThanOrEqualTo;


var _sieve = [];
var _list = [];

function sift(max) {
  if (_sieve.length < max + 1) {
    _sieve = SoE.sift(max);
    _list.length = 0;
    for (var i = 0; i < _sieve.length; i++) {
      if (_sieve[i] === true) {
        _list.push(i);
      }
    }
  }
}

function pi(max) {
  sift(max);
  return subList(max, _list);
}

function list(max) {
  return _list.slice(0, pi(max));
}

function sieve(max) {
  sift(max);
  return _sieve.slice(0, max+1);
}

function isPrime(n) {
  sift(n);
  return (_sieve[n] === true);
}

var Primes = {
  pi: pi,
  list: list,
  sieve: sieve,
  isPrime: isPrime
};

module.exports = Primes;
