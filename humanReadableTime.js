//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
//HH = hours, padded to 2 digits, range: 00 - 99
//MM = minutes, padded to 2 digits, range: 00 - 59
//SS = seconds, padded to 2 digits, range: 00 - 59
//The maximum time never exceeds 359999 (99:59:59)
//
//You can find some examples in the test fixtures.
const humanReadableTime = (seconds) => {
  if (!seconds || seconds === 0) return '00:00:00';
  if (seconds > 359999) return false;
};

module.exports = humanReadableTime;
