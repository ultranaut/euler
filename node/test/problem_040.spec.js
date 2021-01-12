const { champernowne, product } = require('../problem_040');

describe("Problem 35: Champernowne's constant", function () {
  it('should get the correct digit', () => {
    expect(champernowne(13)).toBe(1);
    expect(champernowne(30)).toBe(2);
  });
  it('should work', () => {
    expect(product()).toBe(210);
  });
});
