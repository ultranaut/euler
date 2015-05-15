/* jshint node:true, bitwise:false */
'use strict';
var SoE = require('./sieveOfEratosthenes');
var subList = require('./binarySearch').elementsLessThanOrEqualTo;


var _sieve = [];
var _list = [];

function sift(max) {
  _sieve = SoE.sift(max);
  _list.length = 0;
  for (var i = 0; i < _sieve.length; i++) {
    if (_sieve[i] === true) {
      _list.push(i);
    }
  }
  return _sieve;
}

function pi(max) {
  // enlarge sieve if necessary
  if (max > _sieve.length+1) {
    _sieve = sift(max);
  }
  return subList(max, _list);
}

function list(max) {
  return _list.slice(0, pi(max));
}

var Primes = {
  pi: pi,
  list: list
};

module.exports = Primes;
