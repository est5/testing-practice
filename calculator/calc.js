function sum(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function div(x, y) {
  if (y === 0) {
    throw new Error('division by 0 fobiden');
  }
  return x / y;
}

function multiply(x, y) {
  return x * y;
}

module.exports = { sum, sub, div, multiply };
