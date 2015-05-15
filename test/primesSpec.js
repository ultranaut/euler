/* jshint node: true */
/* global describe, it, Pyramid */

var expect = require('chai').expect;
var Primes = require('../Primes.js');

describe('Primes', function () {
  var count;
  var list;
  var sieve;
  var lastElement;
  it('pi', function () {
    count = Primes.pi(1);
    expect(count).to.be.a('number');
    expect(count).to.equal(0);

    count = Primes.pi(1e7);
    expect(count).to.be.a('number');
    expect(count).to.equal(664579);
  });

  it('list', function () {
    list = Primes.list(0);
    lastElement = list[list.length-1];
    expect(list).to.be.an('array');
    expect(list).to.have.length(0);
    expect(lastElement).to.equal(undefined);

    list = Primes.list(1e5);
    lastElement = list[list.length-1];
    expect(list).to.be.an('array');
    expect(list).to.have.length(9592);
    expect(lastElement).to.equal(99991);
  });

  it('sieve', function () {
    sieve = Primes.sieve(1e7 + 100);
    expect(sieve).to.be.an('array');
    expect(sieve).to.have.length(1e7 + 101);
  });
});

