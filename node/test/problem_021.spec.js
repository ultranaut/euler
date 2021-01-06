describe('Problem 21', function () {
  it('should equal 31,626', function () {
    var p021 = require('../problem_021');
    expect(p021.getAmicableNumbers(10000)).toEqual(31626);
  });
});
