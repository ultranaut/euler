/* global describe, it, expect */

const coinCombinations = require('../problem_031');

const usCoins = [1, 5, 10, 25, 50, 100];
const gbCoins = [1, 2, 5, 10, 20, 50, 100, 200];

describe('Problem 31: Coin sums ', () => {
  it('should handle a zero amount', function () {
    expect(coinCombinations(0, usCoins)).toBe(1);
  });
  it('should handle zero coins', () => {
    expect(coinCombinations(20, [])).toBe(0);
  });
  it('should correctly count coin combinations', () => {
    expect(coinCombinations(5, usCoins)).toBe(2);
    expect(coinCombinations(100, usCoins)).toBe(293);
    expect(coinCombinations(5000, usCoins)).toBe(4587118976);
    expect(coinCombinations(200, gbCoins)).toBe(73682);
  });
});

// source for $50 answer: https://www.quora.com/How-many-different-combinations-of-all-6-US-coins-equaling-50-are-there
