var Pyramid = function (values) {
  this.nodes = values.slice();
};

Pyramid.prototype.getParents = function (row, col, paths) {
  var parents = [];
  var currRow = paths[row];
  var prevRow = paths[row - 1];

  // only applies to first row
  if (prevRow === undefined) {
    parents.push(0);
  }
  else {
    var lParent = prevRow[col - 1];
    var rParent = prevRow[col];

    if (lParent !== undefined) {
      parents.push(lParent);
    }
    if (rParent !== undefined) {
      parents.push(rParent);
    }
  }
  return parents;
};

Pyramid.prototype.maxPath = function () {
  // make a copy of this.nodes, arranged into rows
  var paths = [];
  var row = 1;
  var col;
  var parents;

  var start = 0;
  while (start < this.nodes.length) {
    var stop = start + row;
    paths.push(this.nodes.slice(start, stop));
    start = stop;
    row++;
  }

  for (row = 0; row < paths.length; row++) {
    for (col = 0; col < paths[row].length; col++) {
      parents = this.getParents(row, col, paths);
      paths[row][col] += Math.max.apply(null, parents);
    }
  }

  var maxValue = Math.max.apply(null, paths.slice(-1)[0]);
  return maxValue;
};

module.exports = Pyramid;
