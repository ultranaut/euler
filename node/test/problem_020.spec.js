describe('Problem 20', function () {
  var p020 = require('../problem_020');
  var sfd = p020.sumFactorialDigits;

  it('sumFactorialDigits', function () {
    expect(sfd(10)).toEqual(27);
  });

  describe('sum of the digits of 100!', function () {
    it('should equal 648', function () {
      expect(sfd(100)).toEqual(648);
    });
  });
});
