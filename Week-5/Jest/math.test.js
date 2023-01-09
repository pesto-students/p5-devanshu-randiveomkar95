const mathOperations = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(mathOperations.sum(1, 2)).toBe(3);
});

test('adds 10 - 2 to equal 8', () => {
  expect(mathOperations.diff(10, 2)).toBe(8);
});

test('adds 2 * 2 to equal 4', () => {
  expect(mathOperations.product(2, 2)).toBe(4);
});