import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
} from './main.js';

describe('capitalize', () => {
  test('capitalizes first character', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  test('works with empty string', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('reverseString', () => {
  test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  test('works with empty string', () => {
    expect(reverseString('')).toBe('');
  });
});

describe('calculator', () => {
  test('adds two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });
  test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });
  test('divides two numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });
  test('throws error when dividing by zero', () => {
    expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
  });
});

describe('caesarCipher', () => {
  test('shifts characters correctly', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
  });
  test('wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });
  test('preserves case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });
  test('handles punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
});

describe('analyzeArray', () => {
  test('analyzes array correctly', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });
  test('works with empty array', () => {
    expect(analyzeArray([])).toEqual({
      average: NaN,
      min: Infinity,
      max: -Infinity,
      length: 0
    });
  });
});
