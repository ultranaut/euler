/* jshint node: true */
/* global describe, it */

var expect = require('chai').expect;
var Arithmetic = require('../lib/arithmetic');

describe('Arithmetic', function () {
  var digitize = Arithmetic.digitize;
  var add = Arithmetic.add;
  var multiply = Arithmetic.multiply;
  var factorial = Arithmetic.factorial;

  it('digitize', function () {
    expect(digitize(3854)).to.deep.equal([4, 5, 8, 3]);
    expect(digitize(-12)).to.deep.equal([2, 1]);
    expect(digitize(0)).to.deep.equal([0]);
  });

  it('add', function () {
    expect(add(4, 7)).to.deep.equal(digitize(11));
    expect(add(7345, 99)).to.deep.equal(digitize(7345 + 99));
    expect(add(99, 7345)).to.deep.equal(digitize(7345 + 99));

  });

  it('multiply', function () {
    expect(multiply(12, 13)).to.deep.equal(digitize(12 * 13));
    expect(multiply(99, 99)).to.deep.equal(digitize(99 * 99));
    expect(multiply([3, 4, 2], [7, 1])).to.deep.equal(digitize(243 * 17));
  });

  it('factorial', function () {
    var fact27 = [
      0, 0, 0, 0, 0, 0, 8, 6, 7, 0, 6, 1, 2, 5, 3,
      8, 1, 4, 0, 5, 4, 9, 6, 8, 8, 8, 8, 0, 1 ];
    expect(factorial(27)).to.deep.equal(digitize(fact27));
    expect(factorial(12)).to.deep.equal(digitize(479001600));
  });
});
