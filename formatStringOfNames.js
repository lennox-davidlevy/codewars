//Given: an array containing hashes of names
//Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
//Example:
//list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
//// returns 'Bart, Lisa & Maggie'
//list([ {name: 'Bart'}, {name: 'Lisa'} ])
//// returns 'Bart & Lisa'
//list([ {name: 'Bart'} ])
/// returns 'Bart'
//list([])
//// returns ''
//Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

const formatStringOfNames = (names) => {
  if (!names || names.length === 0) return '';
  if (names.length === 1) return names[0]['name'];
  if (names.length === 2) {
    return formatLastTwoNames(names.slice(-2));
  }
  return (
    formatNamesBeforeLastTwo(names.slice(0, names.length - 2)) +
    formatLastTwoNames(names.slice(-2))
  );
};

const formatLastTwoNames = (names) => {
  const secondToLastName = names[names.length - 2]['name'];
  const lastName = names[names.length - 1]['name'];
  return `${secondToLastName} & ${lastName}`;
};

const formatNamesBeforeLastTwo = (names) => {
  let result = '';
  for (let i = 0; i < names.length; i++) {
    const name = names[i]['name'];
    result += `${name}, `;
  }
  return result;
};

module.exports = formatStringOfNames;
