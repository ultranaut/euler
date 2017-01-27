/* jshint node: true, esnext:true */
/* global describe, it */

var expect = require('chai').expect;
var values = require('./euler.data');

describe('Problem 15', function () {
  var p015 = require('../problem_015');
  var nPr = p015.nPr;
  var latticePath = p015.latticePath;
  it('nPr', function () {
    expect(nPr(0, 0)).to.equal(1);
    expect(nPr(6, 8)).to.equal(0);
    expect(nPr(6, -2)).to.equal(0);
    expect(nPr(8, 0)).to.equal(1);
    expect(nPr(8, 8)).to.equal(1);


    expect(nPr(12, 6)).to.equal(924);
    expect(nPr(12, 4)).to.equal(495);
    expect(nPr(12, 8)).to.equal(495);
  });
  it('latticePath', function () {
    expect(latticePath(2, 2)).to.equal(6);
    expect(latticePath(5, 1)).to.equal(6);
    expect(latticePath(15, 15)).to.equal(155117520);
  });
  describe('20x20 lattice path routes', function () {
    it('should equal 137,846,528,820', function () {
      expect(latticePath(20, 20)).to.equal(137846528820);
    });
  });
});

describe('Problem 18', function () {
  describe('maximum path sum', function () {
    it('should equal 1074', function () {
      var p18 = require('../problem_018');
      var Pyramid = p18.Pyramid;
      var values = p18.data.nodeValues;
      var myPyramid = new Pyramid(values);

      expect(myPyramid.maxPath()).to.equal(1074);
    });
  });
});

describe('Problem 19', function () {
  describe('count sundays', function () {
    it('should equal 171', function () {
      var p19 = require('../problem_019');
      expect(p19.countSundays(1901, 2001)).to.equal(171);
    });
  });
});

describe('Problem 20', function () {
  var p020 = require('../problem_020');
  var sfd = p020.sumFactorialDigits;

  it('sumFactorialDigits', function () {
    expect(sfd(10)).to.equal(27);
  });

  describe('sum of the digits of 100!', function () {
    it('should equal 648', function () {
      expect(sfd(100)).to.equal(648);
    });
  });
});

describe('Problem 21', function () {
  it('should equal 31,626', function () {
    var p021 = require('../problem_021');
    expect(p021.getAmicableNumbers(10000)).to.equal(31626);
  });
});

describe('Problem 22', function () {
  describe('names scores', function () {
    it('should equal 871198282', function () {
      var p022 = require('../problem_022.js');
      var nameList = values.p022;
      var nameScores = p022(nameList);

      expect(nameScores).to.equal(871198282);
    });
  });
});

describe('Problem 24', function () {
  var p024 = require('../problem_024');
  var getNthPermutation = p024.getNthPermutation;
  var permutate = p024.permutate;

  var tenDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('permutate', function () {
    var p4 = permutate(['a', 'b', 'c', 'd']);
    expect(p4).to.be.an('array');
    expect(p4).to.have.length(24);
    expect(p4[p4.length - 1]).to.deep.equal(['d', 'c', 'b', 'a']);
  });
  it('getNthPermutation', function () {
    var els = ['a', 'b', 'c'];
    var p1 = getNthPermutation(els, 1);
    var p3 = getNthPermutation(els, 3);
    var p6 = getNthPermutation(els, 6);
    expect(p1).to.equal('abc');
    // expect(p3).to.equal('bac');
    expect(p6).to.equal('cba');

  });

  describe('the millionth lexicographic permutation of [0...9]', function () {
    it('should be 2783915460', function () {
      expect(getNthPermutation(tenDigits, 1e6)).to.equal('2783915460');
    });
  });
});

describe('Problem 25', function () {
  var p025 = require('../problem_025');
  var fi = p025.firstIndexOfLength;
  it('firstIndexOfLength', function () {
    expect(fi(2)).to.equal(7);
    expect(fi(3)).to.equal(12);
    expect(fi(8)).to.equal(36);
    expect(fi(10)).to.equal(45);
  });
  describe('Index of first Fibonacci number of 1000 digits', function () {
    it('should equal 4782', function () {
      expect(fi(1000)).to.equal(4782);
    });
  });
});

describe('Problem 29', function () {
  it('should equal 9,183', function () {
    var p029 = require('../problem_029');
    var min = 2,
        max = 100;
    var dp = p029.distinctPowers(min, max);
    expect(dp).to.equal(9183);
  });
});

describe('Problem 33', function () {
  describe('#getProduct', function () {
    it('denominator should equal 100', function () {
      var P033 = require('../problem_033');
      var myProblem = new P033();

      expect(myProblem.getProduct().denominator).to.equal(100);
    });
  });
});

describe('Problem 35', function () {
  var p035 = require('../problem_035');
  it('rotate', function () {
    expect(p035.rotate(123)).to.eql([]);
    expect(p035.rotate(7391)).to.eql([1739, 3917, 7391, 9173]);
  });

  it('dedupe', function () {
    var lista = [2, 2, 2, 2, 2, 2];
    var listb = [2, 2, 2, 1];
    expect(p035.dedupe([2,2,2,2])).to.eql([2]);
    expect(p035.dedupe([1,2,2,3])).to.eql([1, 2, 3]);
    expect(p035.dedupe([1,2,3])).to.eql([1, 2, 3]);
  });

  describe('Circular primes less than 1,000,000', function () {
    it('should equal 55', function () {
      expect(p035.circularPrimes(1000000)).to.equal(55);
      expect(p035.circularPrimes(100)).to.equal(13);
    });
  });
});

describe('Problem 67', function () {
  describe('maximum path sum', function () {
    it('should equal 7273', function () {
      var p67 = require('../problem_067');
      var Pyramid = p67.Pyramid;
      var values = p67.data.nodeValues;
      var myPyramid = new Pyramid(values);

      expect(myPyramid.maxPath()).to.equal(7273);
    });
  });
});
