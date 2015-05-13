/* jshint node: true, esnext:true */
/* global describe, it, Pyramid */

var expect = require('chai').expect;

describe('Sieve of Eratosthenes', function () {
  describe('#constructor', function () {
    it('should return an array of `limit` length', function () {
      var Sieve = require('../sieveOfEratosthenes.js');

      var sieve = new Sieve(1000);
      expect(sieve.sieve.length).to.equal(1000);

      sieve = new Sieve(100000);
      expect(sieve.sieve.length).to.equal(100000);

      sieve = new Sieve(783);
      expect(sieve.sieve.length).to.equal(783);
    });
  });
});
