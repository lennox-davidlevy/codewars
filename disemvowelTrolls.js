// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  if (!str || str.length === 0) return '';
  str = str.split('');
  let result = '';
  const vowelDictionary = { a: 1, e: 1, i: 1, o: 1, u: 1 };
  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    if (!vowelDictionary[letter]) {
      result += str[i];
    }
  }
  return result;
}
