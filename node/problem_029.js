/* jshint node:true */
'use strict';

function distinctPowers(baseMin, baseMax, expMin, expMax) {
  // defaults
  expMin = typeof expMin === 'undefined' ? baseMin : expMin;
  expMax = typeof expMax === 'undefined' ? baseMax : expMax;

  var height = baseMax - baseMin + 1;
  var width = expMax - expMin + 1;
  var count = width * height;
  var baseDone = [];
  var temp = [];

  // step through all the bases which have multiple powers within range
  // e.g., for baseMax = 100, that'd be 2 thru 10
  for (var base = baseMin; base <= Math.sqrt(baseMax); base++) {
    temp.length = 0;

    // skip if this particular base has already been covered by a lower
    // base; e.g. bases 4, 8, 16, ..., 64 will have already been dealt
    // with doing base 2
    if (baseDone[base] === 1) {
      continue;
    }

    // for all powers of base less than baseMax, e.g. 4, 8, 16, ...
    for (var power = 1; Math.pow(base, power) <= baseMax; power++) {
      var newBase = Math.pow(base, power);
      // remove all these values from the count
      count -= width;

      for (var exp = expMin; exp <= expMax; exp++) {
        temp[power * exp] = 1;
      }
      baseDone[Math.pow(base, power)] = 1;
    }

    // add distinct values back onto count
    count += temp.filter(function (val) { return val === 1; }).length;
  }
  return count;
}

module.exports = {
  distinctPowers: distinctPowers,
};



