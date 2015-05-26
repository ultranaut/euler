/* jshint node: true */
'use strict';

var sort = require('./lib/mergeSort.js');
var data = require('./test/euler.data');

/*
 *  Problem 22: Names scores
 *
 *  Using names.txt (right click and 'Save Link/Target As...'), a 46K
 *  text file containing over five-thousand first names, begin by
 *  sorting it into alphabetical order. Then working out the
 *  alphabetical value for each name, multiply this value by its
 *  alphabetical position in the list to obtain a name score.
 *
 *  For example, when the list is sorted into alphabetical order, COLIN,
 *  which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the
 *  list. So, COLIN would obtain a score of 938 × 53 = 49714.
 *
 *  What is the total of all the name scores in the file?
 */
function p022 (list) {
  var sum = 0;
  var sorted = sort(list);
  var len = sorted.length;

  for (var i = 0; i < len; i++) {
    var name = sorted[i];
    var partialSum = 0;
    var rank = i + 1;
    for (var j = 0; j < sorted[i].length; j++) {
      partialSum += name.charCodeAt(j) - 64;
    }
    sum += partialSum * rank;
  }
  return sum;
}

module.exports = p022;
