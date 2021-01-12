const { isPalindrome, sumPalindromes } = require('../problem_036.js');

describe('Problem 36: Double-base palindromes', () => {
  it('should be able to test palindromes', () => {
    expect(typeof isPalindrome).toBe('function');
    expect(isPalindrome('abbabba')).toBe(true);
    expect(isPalindrome('abbabca')).toBe(false);
  });
  it('should return the sum of palindromes', () => {
    expect(typeof sumPalindromes).toBe('function');
    expect(sumPalindromes(10)).toBe(25);
    expect(sumPalindromes(100)).toBe(157);
    expect(sumPalindromes(1000000)).toBe(872187);
  });
});
