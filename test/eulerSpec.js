/* jshint node: true, esnext:true */
/* global describe, it, Pyramid */

var expect = require('chai').expect;
var values = require('./euler.data');

describe('Problem 18', function () {
  describe('maximum path sum', function () {
    it('should equal 1074', function () {
      var Pyramid = require('../problem_067');
      var myPyramid = new Pyramid(values.p018);

      expect(myPyramid.maxPath()).to.equal(1074);
    });
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

describe('Problem 67', function () {
  describe('maximum path sum', function () {
    it('should equal 7273', function () {
      var Pyramid = require('../problem_067');
      var myPyramid = new Pyramid(values.p067);

      expect(myPyramid.maxPath()).to.equal(7273);
    });
  });
});


/*
describe('Hand', function () {
  describe('#addCard()', function () {
    it('should organize dealt cards', function () {
      var Hand = require('../problem_054.js');
      var myHand = new Hand();
      var cards = ['8C', 'TS', 'KC', '9H', '4S'];
      for (var idx in cards) {
        myHand.addCard(cards[idx]);
      }

      expect(myHand.cards).to.deep.equal({
        S: [10, 4],
        C: [8, 13],
        H: [9],
        D: []
      });
    });
  });
});
*/
