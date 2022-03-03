const encrypt = require('./cipher');
test('encrypt char with default shift 5', () => {
  expect(encrypt('a')).toMatch('f');
});

test('wrap char with default shift 5', () => {
  expect(encrypt('z')).toMatch('e');
});

test('encrypt string with default shift 5', () => {
  expect(encrypt('attack at dawn')).toMatch('fyyfhp fy ifbs');
});
test('encrypt string  keeping same case default shift 5', () => {
  expect(encrypt('attack at DAWN')).toMatch('fyyfhp fy IFBS');
});

test('encrypt string with commas default shift 5', () => {
  expect(encrypt('attack ,at, dawn')).toMatch('fyyfhp ,fy, ifbs');
});

test('encrypt number', () => {
  expect(encrypt(5)).toMatch('');
});
