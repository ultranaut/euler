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

const buildPalindrome = (n, odd = false) => {
  let palindrome = n;
  if (odd) {
    n = Math.floor(n / 10);
  }

  while (n > 0) {
    palindrome = palindrome * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return palindrome;
};

/*
const isPalindrome = (n, base = 10) => {
  let reversed = 0;
  let i = n;

  while (i > 0) {
    // append last digit to reversed
    reversed = reversed * base + (i % base);
    // discard last digit
    i = Math.floor(i / base);
  }
  return n === reversed;
};
*/

const isPalindrome = (n) => {
  let i = 0,
    j = n.length - 1;
  while (i <= j) {
    if (n.charAt(i) !== n.charAt(j)) {
      return false;
    }
    i++, j--;
  }
  return true;
};

const sumPalindromes = (n) => {
  // number of digits in n
  let nDigits = Math.floor(Math.log10(n) + 1);
  // limit on size of number we need to search
  let maxSize = Math.pow(10, Math.ceil((nDigits + 1) / 2));

  let sum = 0;

  for (let i = 1; i <= maxSize; i++) {
    let greater = buildPalindrome(i);
    let lesser = buildPalindrome(i, true);

    if (greater <= n && isPalindrome(greater.toString(2))) {
      sum += greater;
    }
    if (lesser <= n && isPalindrome(lesser.toString(2))) {
      sum += lesser;
    }
  }
  return sum;
};

module.exports = { isPalindrome, buildPalindrome, sumPalindromes };
