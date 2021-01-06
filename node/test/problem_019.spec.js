describe('Problem 19', function () {
  describe('count sundays', function () {
    it('should equal 171', function () {
      var p19 = require('../problem_019');
      expect(p19.countSundays(1901, 2001)).toEqual(171);
    });
  });
});
