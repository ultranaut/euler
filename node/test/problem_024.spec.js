describe('Problem 24', function () {
  var p024 = require('../problem_024');
  var getNthPermutation = p024.getNthPermutation;
  var permutate = p024.permutate;

  var tenDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('permutate', function () {
    var p4 = permutate(['a', 'b', 'c', 'd']);
    expect(Array.isArray(p4)).toBe(true);
    expect(p4.length).toBe(24);
    expect(p4[p4.length - 1]).toEqual(['d', 'c', 'b', 'a']);
  });
  it('getNthPermutation', function () {
    var els = ['a', 'b', 'c'];
    var p1 = getNthPermutation(els, 1);
    var p3 = getNthPermutation(els, 3);
    var p6 = getNthPermutation(els, 6);
    expect(p1).toEqual('abc');
    // expect(p3).toEqual('bac');
    expect(p6).toEqual('cba');

  });

  describe('the millionth lexicographic permutation of [0...9]', function () {
    it('should be 2783915460', function () {
      expect(getNthPermutation(tenDigits, 1e6)).toEqual('2783915460');
    });
  });
});

