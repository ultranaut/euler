describe('Problem 25', function () {
  var p025 = require('../problem_025');
  var fi = p025.firstIndexOfLength;
  it('firstIndexOfLength', function () {
    expect(fi(2)).toEqual(7);
    expect(fi(3)).toEqual(12);
    expect(fi(8)).toEqual(36);
    expect(fi(10)).toEqual(45);
  });
  describe('Index of first Fibonacci number of 1000 digits', function () {
    it('should equal 4782', function () {
      expect(fi(1000)).toEqual(4782);
    });
  });
});

