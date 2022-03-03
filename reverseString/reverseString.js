function reverse(string) {
  let output = '';
  for (let i = string.length - 1; i >= 0; i--) {
    output += string[i];
  }
  return output;
}

module.exports = reverse;
