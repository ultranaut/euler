describe('Problem 30', function () {
  var digitPowers = require('../problem_030');
  describe('Sum of fourth powers', function () {
    it('should equal 19316', function () {
      expect(digitPowers(4)).toEqual(19316);
    });
  });
  describe('Sum of fifth powers', function () {
    it('should equal 443839', function () {
      expect(digitPowers(5)).toEqual(443839);
    });
  });
});
