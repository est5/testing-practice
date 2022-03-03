const capitalize = require('./capitalize');

test('Return capitalized string', () => {
  expect(capitalize('hello')).toMatch('Hello');
});
