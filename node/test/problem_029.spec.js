describe('Problem 29', function () {
  it('should equal 9,183', function () {
    var p029 = require('../problem_029');
    var min = 2,
      max = 100;
    var dp = p029.distinctPowers(min, max);
    expect(dp).toEqual(9183);
  });
});
