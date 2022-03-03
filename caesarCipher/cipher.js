const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');

function encrypt(s, shift = 5) {
  let out = '';

  for (let i = 0; i < s.length; i++) {
    if (s === ' ') {
      out += ' ';
      continue;
    }
    if (alphabet.indexOf(s[i].toLowerCase()) === -1) {
      out += s[i];
      continue;
    }
    let idx = (alphabet.indexOf(s[i].toLowerCase()) + 5) % 26;
    if (isUpperCase(s[i])) {
      out += alphabet[idx].toUpperCase();
    } else {
      out += alphabet[idx];
    }
  }
  return out;
}

function isUpperCase(character) {
  if (character == character.toUpperCase()) {
    return true;
  }
  if (character == character.toLowerCase()) {
    return false;
  }
}

module.exports = encrypt;
