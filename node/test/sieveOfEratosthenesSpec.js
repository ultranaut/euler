/* jshint node: true, esnext:true, mocha: true */

var expect = require('chai').expect;
var sieve = require('../sieveOfEratosthenes.js');

describe('Sieve of Eratosthenes', function () {
  it('sift', function () {
    var isTrue = function (el, i) { return el * i; };

    var values = [
      {
        max: 10,
        piX: 4,
        largest: 7,
        twinA: 5,
        twinB: 7
      },
      {
        max: 103,
        piX: 27,
        largest: 103,
        twinA: 101,
        twinB: 103
      },
      {
        max: 1e6,
        piX: 78498,
        largest: 999983,
        twinA: 999959,
        twinB: 999961
      }
    ];

    for (var i in values) {
      var item = values[i];
      var sifted = sieve.sift(item.max);
      var primes = sifted.filter(isTrue);

      expect(sifted).to.be.an('array');
      expect(sifted).to.have.length(item.max + 1);
      expect(primes).to.have.length(item.piX);
      expect(sifted[item.largest]).to.equal(true);
      expect(sifted[item.twinA]).to.equal(true);
      expect(sifted[item.twinB]).to.equal(true);
    }
  });
});
