/* jshint node:true */
'use strict';

function merge(a, b) {
  var merged = [];
  var nextItem;
  while (a.length !== 0 && b.length !== 0) {
    if (a[0] <= b[0]) {
      nextItem = a.shift();
    }
    else {
      nextItem = b.shift();
    }
    merged.push(nextItem);
  }
  return merged.concat(a).concat(b);
}

function sort(list) {
  if (list.length < 2) {
    return list;
  }

  var midpoint = Math.floor(list.length / 2);
  return merge(sort(list.slice(0, midpoint)), sort(list.slice(midpoint)));

}

module.exports = sort;
