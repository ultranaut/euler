/**
 * Champernowne's constant
 *
 * An irrational decimal fraction is created by concatenating the
 * positive integers:
 *
 *    0.123456789101112131415161718192021...
 *
 * It can be seen that the 12th digit of the fractional part is 1.
 *
 * If d(n) represents the nth digit of the fractional part, find the
 * value of the following expression.
 *
 *    d(1) × d(10) × d(100) × d(1000) × d(10000) × d(100000) × d(1000000)     
 */

const champernowne = (d) => {
  let n = 0;
  let max = 0;

  while (max < d) {
    n++;
    // add number of digits of n to max
    max += Math.floor(Math.log10(n)) + 1;
  }
  
  // if max is greater than n, whittle the number down
  for (let i = max - d; i > 0; i--) {
    n = Math.floor(n / 10); 
  }
  return n % 10;
};

const product = () => {
  return (
    champernowne(1) *
    champernowne(10) *
    champernowne(100) *
    champernowne(1000) *
    champernowne(10000) *
    champernowne(100000) *
    champernowne(1000000)
  );
};

module.exports = { champernowne, product };
