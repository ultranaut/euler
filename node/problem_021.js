/* jshint node:true */
'use strict';

/**
 * Problem 21: Amicable numbers
 *
 * Let d(n) be defined as the sum of proper divisors of n (numbers less
 * than n which divide evenly into n).
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable
 * pair and each of a and b are called amicable numbers.
 *
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20,
 * 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of
 * 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
 *
 * Evaluate the sum of all the amicable numbers under 10000.
 */

function getDivisors(n) {
  var sqrt = Math.sqrt(n);
  var divisors = [1];
  for (var i = 2; i <= sqrt; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n/i) {
        divisors.push(n/i);
      }
    }
  }
  return divisors;
}

function sumArray(arr) {
  var sum = 0;
  for (var i in arr) {
    sum += arr[i];
  }
  return sum;
}

function sumOfDivisors(n) {
  var divisors = getDivisors(n);
  return sumArray(divisors);
}

function getAmicableNumbers(max) {
  var pairs = [];
  var nums = Array.apply(null, new Array(max));
  nums[0] = nums[1] = false;
  for (var i = 2; i < max; i++) {
    if (nums[i] === undefined) {
      var mySum = sumOfDivisors(i);
      if (mySum >= max || i === mySum) {
        nums[i] = false;
      }
      else {
        nums[i] = nums[mySum] = (sumOfDivisors(mySum) === i);
        if (sumOfDivisors(mySum) === i) {
          pairs.push([i, mySum]);
        }
      }
    }
  }
  // return pairs;
  var ans = 0;
  for (var p in pairs) {
    ans += pairs[p][0] + pairs[p][1];
  }
  return ans;
}

module.exports = {
  getDivisors: getDivisors,
  getAmicableNumbers: getAmicableNumbers,
  sumOfDivisors: sumOfDivisors
};




