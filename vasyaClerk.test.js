const tickets = require('./vasyaClerk');

describe('vasya clerk algorit.skiphm should', () => {
  it.skip('show testing structure is working', () => {
    expect(true).toBe(true);
  });
  it.skip('show that given no customer orders, should return "YES"', () => {
    expect(tickets([])).toEqual('YES');
  });
  it.skip('show that given one customer wit.skiph exact change, should return "YES"', () => {
    expect(tickets([25])).toEqual('YES');
  });
  it.skip('show that given one customer wit.skiphout exact change, should return "NO"', () => {
    expect(tickets([35])).toEqual('NO');
  });
  it.skip('show that given two customers, the first wit.skiph exact change, and the second needs change more than 25 dollars, shoudl return no', () => {
    expect(tickets([25, 100])).toEqual('NO');
  });
  it.skip('show that given two customers, both wit.skiph exact change should return "YES"', () => {
    expect(tickets([25, 25])).toEqual('YES');
  });
  it.skip('show that given multiple customers wit.skiph exact change, and the final one needing change less than the amount in the register, should return "YES"', () => {
    expect(tickets([25, 25, 50, 50])).toEqual('YES');
  });
  it.skip('[25,25,50,100,25,50,25,100,25,25,50,100] should return "YES"', () => {
    expect(
      tickets([25, 25, 50, 100, 25, 50, 25, 100, 25, 25, 50, 100])
    ).toEqual('YES');
  });
  it('[25,50,25,100,25,50,25,100,25,25,25,100,25,100,50] should return "NO"', () => {
    expect(
      tickets([25, 50, 25, 100, 25, 50, 25, 100, 25, 25, 25, 100, 25, 100, 50])
    ).toEqual('NO');
  });
});
//
// Test.assertEquals(tickets([25, 25, 50, 50]), "YES");
// Test.assertEquals(tickets([25, 100]), "NO");
