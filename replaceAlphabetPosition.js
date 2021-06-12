// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

const alphabetPosition = (text) => {
  const alphabetHash = {};
  let result = [];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  alphabet.split('').forEach((char, index) => (alphabetHash[char] = index + 1));
  text.split('').forEach((char) => {
    char = char.toLowerCase();
    if (alphabetHash[char]) result.push(alphabetHash[char]);
  });
  return result.join(' ');
};

module.exports = alphabetPosition;
