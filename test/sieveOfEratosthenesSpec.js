/* jshint node: true, esnext:true */
/* global describe, it, Pyramid */

var expect = require('chai').expect;

describe('Sieve of Eratosthenes', function () {
  describe('#pi()', function () {
    var Sieve = require('../sieveOfEratosthenes.js');
    var sieve;

    it('number of primes < 1e7 should equal 664,579', function () {
      sieve = new Sieve(1e7);
      expect(sieve.pi()).to.equal(664579);
    });
    it('number of primes < 1e5 should equal 9,592', function () {
      sieve = new Sieve(1e5);
      expect(sieve.pi()).to.equal(9592);
    });
    it('number of primes < 1e3 should equal 168', function () {
      sieve = new Sieve(1e3);
      expect(sieve.pi()).to.equal(168);
    });
  });
});
