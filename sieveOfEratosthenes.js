/* jshint node: true */
'use strict';

var sieve = function (limit) {
  this.sieve = new Array(limit);
  this.sieveLength = this.sieve.length;

  // 0 and 1 are not prime numbers
  this.sieve[0] = this.sieve[1] = false;
  // var sieveMax = Math.(Math.sqrt(limit));
  for (var i = 2; i < this.sieveLength; i++) {
    if (typeof this.sieve[i] === 'undefined') {
      this.sieve[i] = true;
      for (var j = i*i; j < this.sieveLength; j += i) {
        this.sieve[j] = false;
      }
    }
  }
};

sieve.prototype.listPrimes = function () {
  var list = [];
  for (var i in this.sieve) {
    if (this.sieve[i] === true) {
      list.push(i);
    }
  }
  return list;
};

module.exports = sieve;
