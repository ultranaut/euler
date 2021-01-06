/* global describe, it, expect */

describe('Problem 15', function () {
  var p015 = require('../problem_015');
  var nPr = p015.nPr;
  var latticePath = p015.latticePath;
  it('nPr', function () {
    expect(nPr(0, 0)).toEqual(1);
    expect(nPr(6, 8)).toEqual(0);
    expect(nPr(6, -2)).toEqual(0);
    expect(nPr(8, 0)).toEqual(1);
    expect(nPr(8, 8)).toEqual(1);


    expect(nPr(12, 6)).toEqual(924);
    expect(nPr(12, 4)).toEqual(495);
    expect(nPr(12, 8)).toEqual(495);
  });
  it('latticePath', function () {
    expect(latticePath(2, 2)).toEqual(6);
    expect(latticePath(5, 1)).toEqual(6);
    expect(latticePath(15, 15)).toEqual(155117520);
  });
  describe('20x20 lattice path routes', function () {
    it('should equal 137,846,528,820', function () {
      expect(latticePath(20, 20)).toEqual(137846528820);
    });
  });
});


