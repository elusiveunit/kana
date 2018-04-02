/**
 * @flow
 */

import { FONT_SANS, FONT_SERIF } from '../constants/app';
import { themeStatic } from '../style/theme';

// Sizes for dimensions
export const STANDARD_SIZES = {
  small: '10px',
  medium: '25px',
  large: '40px',
};

// Sizes for media queries
export const MEDIA_SIZES = {
  medium: 800,
  small: 550,
};

// Map for vertical alignment names to flex rule values
export const FLEX_VERTICAL_ALIGN_MAP = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
};

// All used z-index values
export const Z_INDEX = {
  quizSecondaryButtons: 10,
  overlay: 90,
  headerDropdown: 100,
};

// Font stacks for font setting names
export const KANA_FONT_MAP = {
  [FONT_SANS]: themeStatic.fontStackKanaSans,
  [FONT_SERIF]: themeStatic.fontStackKanaSerif,
};
