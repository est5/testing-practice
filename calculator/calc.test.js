const calc = require('./calc');

test('sum positive numbers', () => {
  expect(calc.sum(2, 3)).toBe(5);
});

test('sum float numbers', () => {
  expect(calc.sum(0.1, 0.2)).toBeCloseTo(0.3);
});

test('sum negative numbers', () => {
  expect(calc.sum(-2, -3)).toBe(-5);
});

test('subtact positive numbers', () => {
  expect(calc.sub(2, 3)).toBe(-1);
});

test('subtact float numbers', () => {
  expect(calc.sub(0.3, 0.1)).toBeCloseTo(0.2);
});

test('subtact negative numbers', () => {
  expect(calc.sub(-2, -3)).toBe(1);
});

test('divivde positive int numbers', () => {
  expect(calc.div(10, 2)).toBe(5);
});

test('divivde negative int numbers', () => {
  expect(calc.div(-10, -2)).toBe(5);
});

test('divivde by 0', () => {
  expect(() => calc.div(-10, 0)).toThrow(Error);
});

test('divivde float numbers', () => {
  expect(calc.div(2.5, 0.5)).toBe(5);
});

test('mutliply positive numbers', () => {
  expect(calc.multiply(5, 2)).toBe(10);
});

test('mutliply negative numbers', () => {
  expect(calc.multiply(-5, 2)).toBe(-10);
});

test('mutliply float numbers', () => {
  expect(calc.multiply(-5.5, 2.5)).toBe(-13.75);
});
