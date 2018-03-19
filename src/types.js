/**
 * @flow
 */

export type Word = {
  kanji: ?string,
  kana: string,
  english: Array<string>,
};

export type AnswerType = 'none' | 'correct' | 'almost' | 'wrong';

export type MediaSize = 'small' | 'medium' | 'large';

export type Status = 'success' | 'warning' | 'error';

export type Font = 'sans' | 'serif';

export type Theme = 'light' | 'dark';

export type Settings = {
  font: Font,
  theme: Theme,
  kanji: boolean,
};
