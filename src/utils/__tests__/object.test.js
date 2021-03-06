import range from 'lodash/range';
import uniq from 'lodash/uniq';

import {
  assign,
  shuffleArray,
  getRandomRange,
  getRandomIndices,
  tableize,
} from '../object';

describe('assign', () => {
  it('should merge objects', () => {
    expect(assign({ one: 1 }, { two: 2 })).toEqual({ one: 1, two: 2 });
  });

  it('should not modify the source objects', () => {
    const one = { one: 1 };
    const two = { two: 2 };
    const nativeResult = Object.assign(one, two);
    const result = assign(one, two);
    expect(nativeResult).toBe(one);
    expect(result).not.toBe(one);
  });

  it('should handle any number of objects', () => {
    expect(assign({ one: 1 }, { two: 2 }, { three: 3 }, { four: 4 })).toEqual({
      one: 1,
      two: 2,
      three: 3,
      four: 4,
    });
  });

  it("should overwrite 'earlier' properties with 'later' ones", () => {
    expect(assign({ one: 1, two: 1 }, { one: 2, two: 2 }, { one: 3 })).toEqual({
      one: 3,
      two: 2,
    });
  });
});

describe('shuffleArray', () => {
  it('should randomize the order of the items', () => {
    // Shuffling an array of 200 items 50 times and expecting different output
    // every time. There could be duplicates in theory, if that happens the
    // range should be increased and/or the iterations reduces. Or the test
    // removed maybe.
    const arr = range(200);
    const results = range(50).map(() => shuffleArray(arr).join(','));
    expect(uniq(results)).toEqual(results);
  });
});

describe('getRandomRange', () => {
  it('should return an array of the specified length', () => {
    const length = 10;
    const result = getRandomRange(length);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(length);
  });

  it('should randomize the order', () => {
    // Theoretically possible for the random order to be the same, but a large
    // range should make that impossible in practice.
    const length = 100;
    expect(getRandomRange(length)).not.toEqual(range(length));
  });

  it('should include all numbers up to the specified length', () => {
    const result = getRandomRange(10);
    result.sort();
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should start at the specified number if supplied', () => {
    const result = getRandomRange(5, 5);
    result.sort();
    expect(result).toEqual([5, 6, 7, 8, 9]);
  });
});

describe('getRandomIndices', () => {
  it('should return an array of the specified length when the supplied current data is shorter', () => {
    expect(getRandomIndices(5, [1, 2, 3]).length).toBe(5);
  });

  it('should return an array of the specified length when the supplied current data is equal', () => {
    expect(getRandomIndices(3, [1, 2, 3]).length).toBe(3);
  });

  it('should return an array of the specified length when the supplied current data is longer', () => {
    expect(getRandomIndices(3, [1, 2, 3, 4, 5]).length).toBe(3);
  });

  it('should return a current selection of indices unaltered', () => {
    const length = 10;
    const first = getRandomIndices(length);
    const result = getRandomIndices(length, first);
    expect(result).toEqual(first);
  });

  it('should return a new range if the supplied current data is longer than specified', () => {
    const length = 10;
    const lengthDiff = 5;
    const current = getRandomIndices(length + lengthDiff);
    const result = getRandomIndices(length, current);
    const currentSlice = current.slice(0, length);

    expect(result.length).toBe(currentSlice.length);
    expect(result).not.toEqual(current);
  });

  it('should append new indices to the end if the supplied current data is shorter than specified', () => {
    const length = 15;
    const lengthDiff = 5;
    const current = getRandomIndices(length - lengthDiff);
    const result = getRandomIndices(length, current);

    const resultCurrentSlice = result.slice(0, length - lengthDiff);
    expect(resultCurrentSlice.length).toBe(current.length);
    expect(resultCurrentSlice).toEqual(current);

    const resultNewSlice = result.slice(length - lengthDiff);
    resultNewSlice.sort();
    expect(resultNewSlice).toEqual([10, 11, 12, 13, 14]);
  });
});

describe('tableize', () => {
  it('should add a dimension to the passed array', () => {
    const result = tableize(range(4), 2);
    // prettier-ignore
    const expected = [
      [0, 1],
      [2, 3],
    ];
    expect(result).toEqual(expected);
  });

  it('should include uneven remainders in the last row', () => {
    const result = tableize(range(7), 3);
    // prettier-ignore
    const expected = [
      [0, 1, 2],
      [3, 4, 5],
      [6],
    ];
    expect(result).toEqual(expected);
  });

  it('should handle arrays with any data', () => {
    const obj = { obj: 'val' };
    const arr = [0, 1, '2'];
    const date = new Date();
    const source = [123, 'str', NaN, obj, false, arr, null, date, true];
    const result = tableize(source, 3);
    // prettier-ignore
    const expected = [
      [123, 'str', NaN],
      [obj, false, arr],
      [null, date, true],
    ];
    expect(result).toEqual(expected);
  });

  it('should take a config object for settings gaps in the table', () => {
    const gaps = {
      0: [1],
      2: [0, 2],
    };
    const result = tableize(range(6), 3, gaps);
    // prettier-ignore
    const expected = [
      [0, null, 1],
      [2, 3, 4],
      [null, 5, null],
    ];
    expect(result).toEqual(expected);
  });

  it('should handle full rows of gaps', () => {
    const gaps = {
      0: [0],
      1: [0, 1],
      2: [0, 1],
    };
    const result = tableize(range(3), 2, gaps);
    // prettier-ignore
    const expected = [
      [null, 0],
      [null, null],
      [null, null],
      [1, 2],
    ];
    expect(result).toEqual(expected);
  });
});
