/* jshint node: true */
/* global describe, it, Pyramid */

var expect = require('chai').expect;
var sort = require('../lib/mergeSort');

describe('mergeSort', function () {
  var listA = [5, 3, 8, 2, 1, 9];
  var sortedA = sort(listA);
  var listB = ['this', 'is', 'an', 'odd', 'number', 'of', 'strings'];
  var sortedB = sort(listB);

  it('should sort elements', function () {
    expect(sortedA).to.deep.equal(listA.sort());
    expect(sortedB).to.deep.equal(listB.sort());
  });

});

