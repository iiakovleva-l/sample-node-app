const { greet, add } = require('../src/index');

describe('greet', () => {
  test('should return a greeting message with the provided name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  test('should return a greeting message with a different name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });
});

describe('add', () => {
  test('should return the sum of two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should return the sum of a positive and a negative number', () => {
    expect(add(5, -2)).toBe(3);
  });

  test('should return the sum of two negative numbers', () => {
    expect(add(-1, -4)).toBe(-5);
  });
});