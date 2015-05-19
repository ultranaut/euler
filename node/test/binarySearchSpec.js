/* jshint node:true */
/* global describe, it */
'use strict';

var expect = require('chai').expect;
var binarySearch = require('../lib/binarySearch');

describe('binarySearch', function () {
  var list = [-3, -2, 2, 7, 7, 7, 11, 13, 17, 19];
  var find = binarySearch.find;
  var eltoet = binarySearch.elementsLessThanOrEqualTo;

  it('find', function () {
    // should return a number whether element exists or not
    expect(find( 7, list)).to.be.a('number');
    expect(find( 4, list)).to.be.a('number');

    // should return index of element or -1 if not found
    expect(find( 2, list)).to.equal( 2);
    expect(find( 4, list)).to.equal(-1);
    expect(find( 0, list)).to.equal(-1);

    // should return the index of the first occcurrence
    expect(find( 7, list)).to.equal( 3);

    // check high and low
    expect(find(23, list)).to.equal(-1);
    expect(find(-4, list)).to.equal(-1);
  });

  it('elementsLessThanOrEqualTo', function () {
    // should return a number
    expect(eltoet( -8, list)).to.be.a('number');
    expect(eltoet( 27, list)).to.be.a('number');
    expect(eltoet(  8, list)).to.be.a('number');

    expect(eltoet( 4, list)).to.equal( 3);
    expect(eltoet(19, list)).to.equal(10);
    expect(eltoet(29, list)).to.equal(10);
    expect(eltoet(-3, list)).to.equal( 1);
    expect(eltoet(-4, list)).to.equal( 0);
    expect(eltoet( 8, list)).to.equal( 6);
  });
});
