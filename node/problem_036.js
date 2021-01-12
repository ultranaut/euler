/**
 * Double-base palindromes
 *
 * The decimal number, 585 = 10010010012 (binary), is palindromic in
 * both bases.
 *
 * Find the sum of all numbers, less than one million, which are
 * palindromic in base 10 and base 2.
 *
 * (Please note that the palindromic number, in either base, may not
 * include leading zeros.)
 *
 */

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
};

// could be optimized, this does too much work
const sumPalindromes = (n) => {
  let sum = 0;

  // we can skip all the evens because they can't be palindromes in
  // base 2
  for (let i = 1; i <= n; i += 2) {
    const dec = i.toString();
    const bin = i.toString(2);
    if (isPalindrome(dec) && isPalindrome(bin)) {
      sum += i;
    }
  }
  return sum;
};

module.exports = { isPalindrome, sumPalindromes };
