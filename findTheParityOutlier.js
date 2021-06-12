// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)
//

function findOutlier(integers) {
  if (!integers || integers.length === 0) return null;
  let parityHash = { even: 0, odd: 0 };
  let evenOutlier;
  for (let i = 0; i < 3; i++) {
    const num = integers[i];
    isEven(num) ? (parityHash['even'] += 1) : (parityHash['odd'] += 1);
  }
  parityHash['even'] < parityHash['odd']
    ? (evenOutlier = true)
    : (evenOutlier = false);
  for (let i = 0; i < integers.length; i++) {
    const num = integers[i];
    if (isEven(num) === evenOutlier) {
      return num;
    }
  }
}

const isEven = (n) => {
  return n % 2 === 0;
};
