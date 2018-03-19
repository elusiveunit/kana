/**
 * Utils for objects and arrays.
 *
 * @flow
 */

import range from 'lodash/range';

/**
 * Marge objects into a new one.
 *
 * @param {...Object} objects - Objects to merge. Properties in later objects
 *   overwrite earlier ones.
 * @return {Object}
 */
export function assign(...objects: Array<Object>): Object {
  return Object.assign({}, ...objects);
}

/**
 * Get a shuffled version of an array. Does a Fisher-Yates (Knuth) shuffle.
 *
 * @param {Array} arr - The array to shuffle.
 * @return {Array}
 */
export function shuffleArray(arr: Array<any>): Array<any> {
  const clone = arr.slice(0);
  let currentIndex = arr.length;
  let temporaryValue;
  let randomIndex;

  // While there are elements left, pick a random one and swap it with the
  // current one.
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = clone[currentIndex];
    clone[currentIndex] = clone[randomIndex];
    clone[randomIndex] = temporaryValue;
  }

  return clone;
}

/**
 * Get a continous number range in a shuffled order.
 *
 * @param {number} length - The length of the number range.
 * @param {number} [start] - What number to start on, defaults to 0.
 * @return {Array}
 */
export function getRandomRange(
  length: number,
  start?: number = 0,
): Array<number> {
  return shuffleArray(range(start, start + length));
}

/**
 * Get an array of array indicies (i.e. a continous number range) in a random
 * order.
 *
 * @param {number} length - The number of indicies to get.
 * @param {Array} [current] - Any current index data. If it's supplied and too
 *   small, the newly added indicies will be appended to the end to keep the
 *   previous order up to the new point intact.
 * @return {Array}
 */
export function getRandomIndicies(
  length: number,
  current?: Array<number> = [],
): Array<number> {
  // No current data, or the current is larger than what's now requested.
  // Get a new random range.
  if (!current.length || current.length > length) {
    return getRandomRange(length);
  }

  // The new request is larger than the current data. Keep the order of the
  // current and add a shuffled range of the new indicies to the end.
  if (current.length < length) {
    return current.concat(shuffleArray(range(length).slice(current.length)));
  }

  return current;
}
