/**
 * @flow
 */

import uniqBy from 'lodash/uniqBy';
import { toRomaji } from 'wanakana';

import {
  ANSWER_WRONG,
  ANSWER_ALMOST,
  ANSWER_CORRECT,
  STORAGE_KEY_INDICES,
  STORAGE_KEY_CURRENT_INDEX,
} from '../constants/app';
import { getRandomIndices } from './object';
import { logError } from './app';

import wikipedia from '../data/1-wikipedia.json';
import wiktionary from '../data/2-wiktionary.json';
import nihongoichiban from '../data/3-nihongoichiban.json';

import type { Word } from '../types';

export const WORD_SOURCES = [
  wikipedia.source,
  wiktionary.source,
  nihongoichiban.source,
];

const RAW_WORDS = wikipedia.words.concat(
  wiktionary.words,
  nihongoichiban.words,
);

let wordCache = null;
/**
 * Get all the available words.
 *
 * @return {Arary.<Object>}
 */
export function getWords(): Array<Word> {
  if (wordCache) {
    return wordCache;
  }

  // Remove duplicates by kana
  wordCache = uniqBy(RAW_WORDS, (word) => word[1]).map((wordItem) => ({
    kanji: wordItem[0],
    kana: wordItem[1],
    english: wordItem[2],
  }));

  return wordCache;
}

const SAVED_INDICES_SEPARATOR = ',';
/**
 * Save word collection indices to localStorage.
 *
 * @param {Array} indices - The.
 */
export function saveIndices(indices: Array<number>) {
  try {
    localStorage.setItem(
      STORAGE_KEY_INDICES,
      indices.join(SAVED_INDICES_SEPARATOR),
    );
    return true;
  } catch (e) {
    logError('Saving indices', e);
    return false;
  }
}

/**
 * Get array indices for the word collection in a random order.
 *
 * @return {Array}
 */
export function getWordIndices(): Array<number> {
  const savedData = localStorage.getItem(STORAGE_KEY_INDICES);
  const savedIndices = savedData
    ? savedData
      .split(SAVED_INDICES_SEPARATOR)
      .map((num) => parseInt(num, 10))
      .filter((num) => !Number.isNaN(num))
    : [];
  const indices = getRandomIndices(getWords().length, savedIndices);

  if (indices.join(SAVED_INDICES_SEPARATOR) !== savedData) {
    saveIndices(indices);
  }

  return indices;
}

/**
 * Get the current 'word index array' index.
 *
 * @return {number}
 */
export function getCurrentWordIndex(): number {
  const savedData = localStorage.getItem(STORAGE_KEY_CURRENT_INDEX);

  return savedData ? parseInt(savedData, 10) : 0;
}

/**
 * Get the next 'word index array' index.
 *
 * If the next index is at the end of the word collection it starts over from
 * zero.
 *
 * @param {number} currentIndex - The current index, pass to avoid unnecessary
 *   localStorage reading.
 */
export function getNextWordIndex(
  currentIndex: ?number = getCurrentWordIndex(),
): number {
  const nextIndex =
    currentIndex + 1 === getWords().length ? 0 : currentIndex + 1;

  try {
    localStorage.setItem(STORAGE_KEY_CURRENT_INDEX, nextIndex);
  } catch (e) {
    logError('Saving current index', e);
  }

  return nextIndex;
}

/**
 * Check if a romanization is correct.
 *
 * @param {string} kana - Kana to romanize.
 * @param {string} answer - The suggested romanization.
 * @return {string} The level of correctness for the supplied answer.
 */
export function checkRomajiAnswer(kana: string, answer: string): string {
  // Remove separators that some words have so something like 'いい or よい'
  // can be answered with just 'iiyoi'.
  const metaRegex = /\s+(or|and)\s+(?=.+)/;

  // Remove punctuation so something like '~です' can be answered with
  // just 'desu'. Also remove whitespace.
  const punctuationRegex = /[`´"'.,/#!$%^&*;:=—–\-_~[\](){}\s]/g;

  const sanitizedAnswer = answer
    .replace(metaRegex, '')
    .replace(punctuationRegex, '');
  const sanitizedRomaji = toRomaji(kana)
    .replace(metaRegex, '')
    .replace(punctuationRegex, '');

  // Some lenience for katakana long vowel ou/oo. E.g. the long o in フォーク
  // (fork) is written with ou, not oo (fuouku vs. fuooku), but putting in
  // fuooku still shows that the reading is correct.
  if (
    sanitizedAnswer !== sanitizedRomaji &&
    // A 'katakana-hiragana prolonged sound mark'
    /\u30fc/.test(kana) &&
    (sanitizedAnswer.replace('oo', 'ou') === sanitizedRomaji ||
      sanitizedAnswer.replace('ou', 'oo') === sanitizedRomaji)
  ) {
    return ANSWER_ALMOST;
  }

  return sanitizedAnswer === sanitizedRomaji ? ANSWER_CORRECT : ANSWER_WRONG;
}
