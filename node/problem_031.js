/* jshint node: true */

/**
 * Problem 31: Coin sums
 * In England the currency is made up of pound, £, and pence, p, and
 * there are eight coins in general circulation:
 *
 *     1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
 *
 * It is possible to make £2 in the following way:
 *
 *     1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 *
 * How many different ways can £2 be made using any number of coins?
 *
 */

/*
 * I don't know why, but this one was really satisfying to figure out,
 * and once you do, it's really simple to code. (Actually, I initially
 * figured it out using a recursive method, which could be pretty slow.
 * Subsequently I saw an explanation of doing it iteratively, so I 
 * didn't so much figure that out on my own.)
 *
 */

const coinCombinations = (target, coins) => {
  const totals = new Array(target + 1).fill(0);
  totals[0] = 1;

  coins.forEach((coin) => {
    for (let amount = coin; amount <= target; amount++) {
      totals[amount] += totals[amount - coin];
    }
  })
  return totals[target];
};

module.exports = coinCombinations;
