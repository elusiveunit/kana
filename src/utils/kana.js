/**
 * Utility functions for kana.
 */

import {
  ROMAJI_KEY,
  HIRAGANA_KEY,
  KATAKANA_KEY,
  ALL_KANA,
} from '../constants/kana';

export function toKanaObject(rawKana) {
  return {
    romaji: rawKana[ROMAJI_KEY],
    hiragana: rawKana[HIRAGANA_KEY],
    katakana: rawKana[KATAKANA_KEY],
  };
}

export function getKanaBy(key, value) {
  const result = ALL_KANA.filter((row) => row[key] === value).map(toKanaObject);

  return result.length ? result : null;
}

export function getKanaByRomaji(romaji) {
  return getKanaBy(ROMAJI_KEY, romaji);
}
