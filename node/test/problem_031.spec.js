/* global describe, it, expect */

const coinCombinations = require('../problem_031');

const usCoins = [1, 5, 10, 25, 50, 100];
const gbCoins = [1, 2, 5, 10, 20, 50, 100, 200];

describe('Problem 31: Coin sums ', () => {
  it('should handle zero and negative amounts', function () {
    expect(coinCombinations(0, usCoins)).toBe(1);
    expect(coinCombinations(-5, usCoins)).toBe(0);
  });
  it('should handle zero coins', () => {
    expect(coinCombinations(20, [])).toBe(0);
  });
  it('should correctly count coin combinations', () => {
    expect(coinCombinations(5, usCoins)).toBe(2);
    expect(coinCombinations(10, usCoins)).toBe(4);
    expect(coinCombinations(200, gbCoins)).toBe(73682);
  });
});
