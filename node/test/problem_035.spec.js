describe('Problem 35', function () {
  var p035 = require('../problem_035');
  it('rotate', function () {
    expect(p035.rotate(123)).toEqual([]);
    expect(p035.rotate(7391)).toEqual([1739, 3917, 7391, 9173]);
  });

  it('dedupe', function () {
    var lista = [2, 2, 2, 2, 2, 2];
    var listb = [2, 2, 2, 1];
    expect(p035.dedupe([2, 2, 2, 2])).toEqual([2]);
    expect(p035.dedupe([1, 2, 2, 3])).toEqual([1, 2, 3]);
    expect(p035.dedupe([1, 2, 3])).toEqual([1, 2, 3]);
  });

  describe('Circular primes less than 1,000,000', function () {
    it('should equal 55', function () {
      expect(p035.circularPrimes(1000000)).toEqual(55);
      expect(p035.circularPrimes(100)).toEqual(13);
    });
  });
});
