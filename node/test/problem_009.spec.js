/* global describe, it, expect */

const findTriplets = require('../problem_009');

describe('Problem 9: Pythagorean triplets', function () {
  it('should return one triplet for 12', function () {
    const triplets = findTriplets(12);
    expect(triplets).toHaveLength(1);
    expect(triplets[0]).toEqual([3, 4, 5,]);
  });
  it('should return two triplets for 90', () => {
    const triplets = findTriplets(90);
    expect(triplets).toHaveLength(2);
    expect(triplets[0]).toStrictEqual([9, 40, 41]);
    expect(triplets[1]).toEqual([15, 36, 39]);
  })
});


