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

const buildDigits = () => {
  const divisors = [2, 3, 5, 7, 11, 13, 17];
  const results = [];
  const partials = [['', '0123456789']];

  while (partials.length) {
    const [acc, chars] = partials.shift();
    for (let i = 0; i < chars.length; i++) {
      let builtup = acc + chars.slice(i, i + 1);
      let reduced = chars.slice(0, i) + chars.slice(i + 1);

      let width = builtup.length;
      if (width > 3) {
        const dividend = parseInt(builtup.slice(width - 3));
        const divisor = divisors[width - 4];
        if (dividend % divisor === 0) {
          if (reduced.length > 0) {
            partials.push([builtup, reduced]);
          } else {
            results.push(parseInt(builtup));
          }
        }
      }

      else {
        partials.push([builtup, reduced]);
      }
    }
  }
  const sum = results.reduce((acc, digit) => acc + digit);
  return {sum, results};
};

module.exports = buildDigits;
