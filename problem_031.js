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
 * I don't know why, but this one's really satisfying to figure out,
 * and once you do, it's really simple to code. It'd be a good
 * to add some memoization though; for the problem as given, there's
 * definitely a little lag when it runs. It'd also be interesting to
 * break it down to where it could run in a loop, but I'm too tired
 * to handle that right now.
 *
 */

var coinCombinations = (function () {

  return function total(target, coins) {
    // no coins left to use
    if (coins.length === 0) {
      return 0;
    }
    // can't make a negative target
    if (target < 0) {
      return 0;
    }
    // target hit, add one to the count
    if (target === 0) {
      return 1;
    }

    return total(target - coins[0], coins) + total(target, coins.slice(1));
  };
}());

var exports = module.exports = coinCombinations;
