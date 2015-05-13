/* jshint node: true */
'use strict';

var sieve = (function (limit) {

  var _sieve = [],
      _list  = [];

  function _doSieve(limit) {
    if (limit > _sieve.length) {
      // TODO: should be able to extend rather than rebuild
      _sieve = [];
      _sieve.length = limit + 1;

      // 0 and 1 are not prime numbers
      _sieve[0] = _sieve[1] = false;
      for (var i = 2; i < limit; i++) {
        if (typeof _sieve[i] === 'undefined') {
          _sieve[i] = true;
          _list.push(i);
          for (var j = i*i; j < limit; j += i) {
            _sieve[j] = false;
          }
        }
      }
    }
  }

  function _pi(limit) {
    var count = 0;
    for (var i = 0; i < limit; i++) {
      if (_sieve[i] === true) {
        count++;
      }
    }
    return count;
  }

  var constructor = function (limit) {
    this.showSieve = function () { return _sieve; };
    this.list = _doSieve(limit);
    this.pi = function () {
      return _pi(limit);
    };

  };

  return constructor;
})();

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
