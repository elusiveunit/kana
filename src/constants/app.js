/**
 * @flow
 */

import type { Settings } from '../types';

export const ANSWER_NONE = 'none';
export const ANSWER_WRONG = 'wrong';
export const ANSWER_ALMOST = 'almost';
export const ANSWER_CORRECT = 'correct';

export const STATUS_ERROR = 'error';
export const STATUS_WARNING = 'warning';
export const STATUS_SUCCESS = 'success';

export const STORAGE_KEY_INDICIES = 'indicies';
export const STORAGE_KEY_CURRENT_INDEX = 'currentIndex';
export const STORAGE_KEY_SETTINGS = 'settings';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

export const FONT_SANS = 'sans';
export const FONT_SERIF = 'serif';

export const SETTINGS_KEY_FONT = 'font';
export const SETTINGS_KEY_KANJI = 'kanji';
export const SETTINGS_KEY_THEME = 'theme';
export const DEFAULT_SETTINGS: Settings = {
  [SETTINGS_KEY_FONT]: FONT_SERIF,
  [SETTINGS_KEY_KANJI]: true,
  [SETTINGS_KEY_THEME]: THEME_LIGHT,
};
