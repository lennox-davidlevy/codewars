// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
  if (!word || word.length === 0) return '';
  const characterDictionary = {};
  let result = '';
  word = word.split('');
  word.forEach((char) => {
    char = char.toLowerCase();
    characterDictionary[char] = characterDictionary[char] + 1 || 1;
  });
  word.forEach((char) => {
    char = char.toLowerCase();
    characterDictionary[char] > 1 ? (result += ')') : (result += '(');
  });
  return result;
}
