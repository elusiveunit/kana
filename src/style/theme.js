/**
 * Style theme.
 *
 * Unitless numbers for sizing are in pixels unless otherwise noted.
 */

import { darken, lighten } from 'polished';

import { THEME_DARK, THEME_LIGHT } from '../constants/app';
import { assign } from '../utils/object';

export const themeStatic = {
  // Layout
  pageWidthWide: 1480,
  pageWidthRegular: 1160,
  pageWidthThin: 680,
  pageMargin: '20px',

  // Text
  fontStackMain: "'Source Sans Pro', sans-serif",
  fontStackKanaSerif: "'Source Han Serif', serif",
  fontStackKanaSans: "'Source Han Sans', sans-serif",
  fontStackMono: 'Consolas, Menlo, monospace',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightBold: 600,
  fontSizeH1: 32,
  fontSizeH2: 24,
  fontSizeH3: 21,
  fontSizeH4: 18,

  // Forms
  formFieldPadding: 8,
  formControlHeight: 40,
  formControlRadius: 3,
  formControlFontSize: 20,
};

// Light theme colors
const lightThemeMainBackground = '#f7f7f7';
export const light = assign(themeStatic, {
  type: THEME_LIGHT,

  // General
  actionColor: '#008fd5',
  pageBackgroundColor: lightThemeMainBackground,
  textColorMain: '#444',
  textColorMuted: '#5d5d5d',
  textColorLight: '#706f76',
  textColorDisabled: '#959595', // Not accessible contrast, try not to use

  // Header
  headerBackgroundColor: '#333',
  headerBackgroundHighlightLevel1: lighten(0.07, '#333'),
  headerBackgroundHighlightLevel2: lighten(0.14, '#333'),
  headerTextColor: '#fff',

  // Form
  formFieldBackgroundColor: '#fff',
  formFieldBorderColor: darken(0.1, lightThemeMainBackground),
  formFieldShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.15)',

  // Status
  successMainColor: '#06aa0f',
  successActiveColor: '#47de4e',
  successTextColor: '#fff',

  warningMainColor: '#fd0',
  warningActiveColor: '#e9cb0a',
  warningTextColor: 'rgba(0, 0, 0, 0.75)',

  errorMainColor: '#a30000',
  errorActiveColor: '#f14c4c',
  errorTextColor: '#fff',

  // Buttons
  buttonPrimaryMainColor: '#008fd5',
  buttonPrimaryActiveColor: '#09aeff',
  buttonPrimaryTextColor: '#fff',

  buttonSecondaryMainColor: '#dcdcdc',
  buttonSecondaryActiveColor: '#f2f2f2',
  buttonSecondaryTextColor: 'rgba(0, 0, 0, 0.75)',
});

// Dark theme colors
const darkThemeMainBackground = '#292c33';
export const dark = assign(themeStatic, {
  type: THEME_DARK,

  // General
  actionColor: '#5092e6',
  pageBackgroundColor: darkThemeMainBackground,
  textColorMain: '#f2f2f2',
  textColorMuted: '#ddd',
  textColorLight: '#aaa',
  textColorDisabled: '#959595', // Not accessible contrast, try not to use

  // Header
  headerBackgroundColor: darken(0.05, darkThemeMainBackground),
  headerBackgroundHighlightLevel1: lighten(0.04, darkThemeMainBackground),
  headerBackgroundHighlightLevel2: lighten(0.08, darkThemeMainBackground),
  headerTextColor: '#fafafa',

  // Form
  formFieldBackgroundColor: darken(0.03, darkThemeMainBackground),
  formFieldBorderColor: lighten(0.1, darkThemeMainBackground),
  formFieldShadow: 'none',

  // Status
  successMainColor: '#34933a',
  successActiveColor: '#367b3a',
  successTextColor: '#fff',

  warningMainColor: '#e9cb0a',
  warningActiveColor: '#d2b814',
  warningTextColor: 'rgba(0, 0, 0, 0.75)',

  errorMainColor: '#992424',
  errorActiveColor: '#7b2121',
  errorTextColor: '#fff',

  // Buttons
  buttonPrimaryMainColor: '#5092e6',
  buttonPrimaryActiveColor: '#3978c8',
  buttonPrimaryTextColor: '#fff',

  buttonSecondaryMainColor: '#555',
  buttonSecondaryActiveColor: '#777',
  buttonSecondaryTextColor: '#fff',
});
