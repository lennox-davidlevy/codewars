const formatStringOfNames = require('./formatStringOfNames');

describe('format string of names should', () => {
  it('be a function', () => {
    expect(typeof formatStringOfNames).toBe('function');
  });
  it('return empty string when provided with empty array', () => {
    expect(formatStringOfNames([])).toEqual('');
  });
  it('return "Bart" when provided with one name, "Bart"', () => {
    expect(formatStringOfNames([{ name: 'Bart' }])).toEqual('Bart');
  });
  it('return "Bart & Lisa" when provided with two names,', () => {
    expect(formatStringOfNames([{ name: 'Bart' }, { name: 'Lisa' }])).toEqual(
      'Bart & Lisa'
    );
  });
  it('return "Bart, List & Maggie"', () => {
    expect(
      formatStringOfNames([
        { name: 'Bart' },
        { name: 'Lisa' },
        { name: 'Maggie' },
      ])
    ).toEqual('Bart, Lisa & Maggie');
  });
  it('return multiple names correctly formatted', () => {
    expect(
      formatStringOfNames([
        { name: 'Bart' },
        { name: 'Lisa' },
        { name: 'Maggie' },
        { name: 'Homer' },
        { name: 'Marge' },
      ])
    ).toEqual('Bart, Lisa, Maggie, Homer & Marge');
  });
});
