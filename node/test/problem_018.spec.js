const maxPath = require('../problem_018');
const data = require('../data/problem_018');

describe('Problem 18', function () {
  describe('maximum path sum', function () {
    it('should equal 1074', function () {
      const values = data.nodeValues;

      expect(maxPath(values)).toEqual(1074);
    });
  });
});
