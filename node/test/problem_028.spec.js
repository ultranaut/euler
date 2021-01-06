/* global describe, it, expect */

const spiralSum = require('../problem_028');

describe('Problem 28: Number spiral diagonals', function () {
  it('should handle 0 and 1 for input values ', function () {
    expect(spiralSum(0)).toBe(0);
    expect(spiralSum(1)).toBe(1);
  });
  it('sum the diagonals of an n x n spiral', () => {
    expect(spiralSum(2)).toBe(10);
    expect(spiralSum(3)).toBe(25);
    expect(spiralSum(4)).toBe(56);
    expect(spiralSum(5)).toBe(101);
  })
});


