const reverse = require('./reverseString');
test('Reverse string', () => {
  expect(reverse('hello')).toMatch('olleh');
});
