describe('Problem 33', function () {
  describe('#getProduct', function () {
    it('denominator should equal 100', function () {
      var P033 = require('../problem_033');
      var myProblem = new P033();

      expect(myProblem.getProduct().denominator).toEqual(100);
    });
  });
});
