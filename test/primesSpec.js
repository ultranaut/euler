/* jshint node: true */
/* global describe, it, Pyramid */

var expect = require('chai').expect;
var Primes = require('../Primes.js');

describe('Primes', function () {
  describe('pi(1)', function () {
    it('should equal 0', function () {
      expect(Primes.pi(1)).to.equal(0);
    });
  });

  describe('pi(1e3)', function () {
    it('should equal 168', function () {
      expect(Primes.pi(1e3)).to.equal(168);
    });
  });

  describe('pi(1e7)', function () {
    it('should equal 664,579', function () {
      expect(Primes.pi(1e7)).to.equal(664579);
    });
  });

  describe('list(0)', function () {
    var list = Primes.list(0);
    it('should be array of length 0', function () {
      expect(Array.isArray(list)).to.equal(true);
      expect(list.length).to.equal(0);
    });
    it('last element should be undefined', function () {
      expect(list[list.length - 1]).to.equal(undefined);
    });
  });

  describe('list(100)', function () {
    var list = Primes.list(100);
    it('should be array of length 25', function () {
      expect(Array.isArray(list)).to.equal(true);
      expect(list.length).to.equal(25);
    });
    it('last element should be 97', function () {
      expect(list[list.length - 1]).to.equal(97);
    });
  });

  describe('list(1e5)', function () {
    var list = Primes.list(1e5);
    it('should be array of length 9,592', function () {
      expect(Array.isArray(list)).to.equal(true);
      expect(list.length).to.equal(9592);
    });
    it('last element should be 99,991', function () {
      expect(list[list.length - 1]).to.equal(99991);
    });
  });
});

