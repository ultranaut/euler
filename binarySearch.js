/* jshint node:true, bitwise:false */
'use strict';

/**
 * Find index of first occurence of element in sorted array
 */
function find(el, list) {
  var minIdx = 0;
  var maxIdx = list.length - 1;
  while (minIdx <= maxIdx) {
    // find midpoint of min and max indices
    // bit shift halves the sum and floors it
    var idx = (minIdx + maxIdx) >> 1;

    /*
     * only return the index if it is indeed the first instance, i.e.
     * the element preceding it is not also equal to el. We could just
     * keep checking to the left here until we get the correct index,
     * but that has a worst-case running time of O(n), e.g. if the
     * entire first half of the array is all equal the element.
     */
    if (list[idx] === el && list[idx-1] !== el) {
      return idx;
    }

    if (list[idx] >= el) {
      maxIdx = idx - 1;
    }
    else {
      minIdx = idx + 1;
    }
  }
  // if we're here it's not in the list
  return -1;
}

/**
 * find the length of the sub-list of elements which are less than or
 * equal to some value
 *
 * return the length of the sub-array
 */
function elementsLessThanOrEqualTo(max, list) {
  var minIdx = 0;
  var maxIdx = list.length - 1;

  while (minIdx <= maxIdx) {
    // find midpoint of min and max indices
    //   bit shift halves the sum and floors it
    //   add 1/2 of difference to minIdx to avoid overflow
    var idx = ((maxIdx - minIdx) >> 1) + minIdx;

    if (list[idx] > max) {
      maxIdx = idx - 1;
    }
    else {
      minIdx = idx + 1;
    }
  }
  return minIdx;
}

module.exports = {
  find: find,
  elementsLessThanOrEqualTo: elementsLessThanOrEqualTo,
};
