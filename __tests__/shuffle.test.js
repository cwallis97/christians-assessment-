const { shuffle } = require('../src/shuffle');

describe('shuffle function', () => {
  test('returns an array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = shuffle(inputArray);
    expect(Array.isArray(result)).toBe(true);
  });

  test('returns an array of the same length as the input', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = shuffle(inputArray);
    expect(result.length).toBe(inputArray.length);
  });
});