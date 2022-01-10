/* eslint-env jest */
const {
  isPalindrome,
  buildPalindrome,
  sumPalindromes,
} = require('../problem_036.js');

describe('Problem 36: Double-base palindromes', () => {
  it('should be able to create palindromes', () => {
    expect(typeof buildPalindrome).toBe('function');
    expect(buildPalindrome(9, false)).toBe(99);
    expect(buildPalindrome(9, true)).toBe(9);
    expect(buildPalindrome(37, false)).toBe(3773);
    expect(buildPalindrome(37, true)).toBe(373);
    expect(buildPalindrome(135, false)).toBe(135531);
    expect(buildPalindrome(135, true)).toBe(13531);
    expect(buildPalindrome(737, true)).toBe(73737);
  });
  it('should be able to test palindromes', () => {
    expect(typeof isPalindrome).toBe('function');
    expect(isPalindrome('7337')).toBe(true);
    expect(isPalindrome('113')).toBe(false);
    expect(isPalindrome((3).toString(2))).toBe(true);
    expect(isPalindrome((10).toString(2))).toBe(false);
    expect(isPalindrome((73737).toString(2))).toBe(true);
  });
  it('should return the sum of palindromes', () => {
    expect(typeof sumPalindromes).toBe('function');
    expect(sumPalindromes(10)).toBe(25);
    expect(sumPalindromes(100)).toBe(157);
    expect(sumPalindromes(1000000)).toBe(872187);
  });
});
