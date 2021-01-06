var values = require('./euler.data');

describe('Problem 67', function () {
  describe('maximum path sum', function () {
    it('should equal 7273', function () {
      var p67 = require('../problem_067');
      var maxPath = p67.maxPath;
      var values = p67.data.nodeValues;

      expect(maxPath(values)).toEqual(7273);
    });
  });
});
