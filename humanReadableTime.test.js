const humanReadableTime = require('./humanReadableTime');

describe('Human readbale time should', () => {
  it('be a function', () => {
    expect(typeof humanReadableTime).toBe('function');
  });
  it('return "00:00:00" when passed 0', () => {
    expect(humanReadableTime(0)).toEqual('00:00:00');
  });
  it('return "00:00:05" when passed 5', () => {
    expect(humanReadableTime(5)).toEqual('00:00:05');
  });
  it('return "00:01:00" when passed 60', () => {
    expect(humanReadableTime(60)).toEqual('00:01:00');
  });
  it('return "23:59:59 when passed 86399', () => {
    expect(humanReadableTime(86399)).toEqual('23:59:59');
  });
  it.skip('return "99:59:59" when passed 359999', () => {
    expect(humanReadableTime(359999)).toEqual('99:59:59');
  });
});
