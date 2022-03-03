const capitalize = require('./capitalize');

it('Return capitalized string', () => {
  expect(capitalize('hello')).toMatch('Hello');
});
