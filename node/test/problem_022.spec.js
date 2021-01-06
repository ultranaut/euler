const values = require('./euler.data');

describe('Problem 22', function () {
  describe('names scores', function () {
    it('should equal 871198282', function () {
      var p022 = require('../problem_022.js');
      var nameList = values.p022;
      var nameScores = p022(nameList);

      expect(nameScores).toEqual(871198282);
    });
  });
});
