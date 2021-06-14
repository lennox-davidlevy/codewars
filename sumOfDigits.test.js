const digital_root = require('./sumOfDigits');

describe('sum of digits should', () => {
  it('be a function', () => {
    expect(typeof digital_root).toBe('function');
  });
  it('return zero if no number is provided', () => {
    expect(digital_root()).toEqual(0);
  });
  it('return the number passed in if it is only one digit', () => {
    expect(digital_root(9)).toEqual(9);
  });
});
