/*eslint-env node*/
const buildDigits = require('../problem_043.js');

describe('Problem 43: Sub-string divisibilty', () => {
  it('buildDigits should be a function', () => {
    expect(typeof buildDigits).toBe('function');
  });
  it('should generate the correct answer', () => {
    const result = buildDigits();
    expect(result.sum).toBe(16695334890);
  })
});
