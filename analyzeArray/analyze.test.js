const analyzeArray = require('./analyze');
const array = [1, 8, 3, 4, 2, 6];
test('returns object', () => {
  expect(analyzeArray(array)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('average', () => {
  expect(analyzeArray(array).average).toBe(4);
});

test('min', () => {
  expect(analyzeArray(array).min).toBe(1);
});

test('max', () => {
  expect(analyzeArray(array).max).toBe(8);
});

test('length', () => {
  expect(analyzeArray(array)['length']).toBe(6);
});
