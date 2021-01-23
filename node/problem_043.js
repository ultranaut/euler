/*eslint-env node*/

/**
 * Sub-string divisibility
 *
 * The number, 1406357289, is a 0 to 9 pandigital number because it is
 * made up of each of the digits 0 to 9 in some order, but it also has
 * a rather interesting sub-string divisibility property.
 *
 * Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way,
 * we note the following:
 *
 *   d2d3d4=406 is divisible by 2
 *   d3d4d5=063 is divisible by 3
 *   d4d5d6=635 is divisible by 5
 *   d5d6d7=357 is divisible by 7
 *   d6d7d8=572 is divisible by 11
 *   d7d8d9=728 is divisible by 13
 *   d8d9d10=289 is divisible by 17
 *
 * Find the sum of all 0 to 9 pandigital numbers with this property.
 *
 */

// brute force, takes about 30 minutes, bad

const permutate = (string) => {
  const results = [];
  let [char, chars] = [string.slice(-1), string.slice(0, -1)];

  // push first char onto results
  results.push(char);

  // handle each new character
  while (chars.length) {
    // place null marker to mark end of previous results
    results.push(null);

    // pull next char off of string
    [char, chars] = [chars.slice(-1), chars.slice(0, -1)];

    // add new char into each result set
    let result = results.shift();
    while (result !== null) {
      for (let i = 0; i <= result.length; i++) {
        results.push(result.slice(0, i) + char + result.slice(i));
      }

      result = results.shift();
    }
  }
  return results.sort();
};

const buildDigit = () => {
  const pandigitals = permutate('0123456789');
  const divisors = [2, 3, 5, 7, 11, 13, 17];

  let passes = pandigitals
    .filter((digit) => {
      for (let i = 4; i <= 10; i++) {
        const divisor = divisors[i - 4];
        const dividend = digit.slice(i - 3, i);
        if (dividend % divisor !== 0) {
          return false;
        }
      }
      return true;
    })
    .map((digit) => parseInt(digit));

  let sum = passes.length ? passes.reduce((acc, digit) => acc + digit) : 0;

  return {passes, sum};
};

const pandigits = buildDigit('123');
console.log(pandigits);

module.exports = buildDigit;
