import {
  ANSWER_WRONG,
  ANSWER_ALMOST,
  ANSWER_CORRECT,
} from '../../constants/app';
import { getWords, checkRomajiAnswer } from '../word';

jest.mock('../../data/1-wikipedia.json', () => ({
  words: [[null, 'アロエ', ['From the Dutch |Aloë|: aloe']]],
}));
jest.mock('../../data/2-wiktionary.json', () => ({
  words: [
    ['男の子', 'おとこのこ', ['boy']],
    ['少年', 'しょうねん', ['boy']],
    ['女の子', 'おんなのこ', ['girl wiktionary']],
    ['少女', 'しょうじょ', ['girl wiktionary']],
  ],
}));
jest.mock('../../data/3-nihongoichiban.json', () => ({
  words: [
    ['お母さん', 'おかあさん', ['mother']],
    ['男の子', 'おとこのこ', ['boy']],
    ['女の子', 'おんなのこ', ['girl nihongoichiban']],
  ],
}));

describe('getWords', () => {
  it('should convert raw word data to objects', () => {
    expect(getWords()[0]).toEqual({
      kanji: null,
      kana: 'アロエ',
      english: ['From the Dutch |Aloë|: aloe'],
    });
  });

  it('should filter out duplicates by kana', () => {
    expect(getWords().length).toBe(6);
  });

  it('should keep the first instance of a word when filtering out duplicates', () => {
    expect(getWords()).toEqual([
      { kanji: null, kana: 'アロエ', english: ['From the Dutch |Aloë|: aloe'] },
      { kanji: '男の子', kana: 'おとこのこ', english: ['boy'] },
      { kanji: '少年', kana: 'しょうねん', english: ['boy'] },
      { kanji: '女の子', kana: 'おんなのこ', english: ['girl wiktionary'] },
      { kanji: '少女', kana: 'しょうじょ', english: ['girl wiktionary'] },
      { kanji: 'お母さん', kana: 'おかあさん', english: ['mother'] },
    ]);
  });
});

describe('checkRomajiAnswer', () => {
  it('should return correct for the correct romanization', () => {
    expect(checkRomajiAnswer('あ', 'a')).toBe(ANSWER_CORRECT);
    expect(checkRomajiAnswer('ア', 'a')).toBe(ANSWER_CORRECT);
  });

  it('should return wrong for the wrong romanization', () => {
    expect(checkRomajiAnswer('あ', 'b')).toBe(ANSWER_WRONG);
    expect(checkRomajiAnswer('ア', 'b')).toBe(ANSWER_WRONG);
  });

  it('should handle mixed kana', () => {
    expect(checkRomajiAnswer('あア', 'aa')).toBe(ANSWER_CORRECT);
    expect(checkRomajiAnswer('あア', 'bb')).toBe(ANSWER_WRONG);
  });

  it('should not care about punctuation', () => {
    expect(checkRomajiAnswer('~です', '~desu')).toBe(ANSWER_CORRECT);
    expect(checkRomajiAnswer('~です', 'desu')).toBe(ANSWER_CORRECT);
    expect(checkRomajiAnswer('です', '~desu')).toBe(ANSWER_CORRECT);
    expect(checkRomajiAnswer('です', 'desu')).toBe(ANSWER_CORRECT);
    // toRomaji adds the single quote. Checking 'not wrong' rather than correct
    // since toRomaji has flip-flopped between goo and gou for (ゴー).
    expect(checkRomajiAnswer('ゴールデンウイーク', "gouruden'uiiku")).not.toBe(
      ANSWER_WRONG,
    );
    expect(checkRomajiAnswer('ゴールデンウイーク', 'gourudenuiiku')).not.toBe(
      ANSWER_WRONG,
    );
  });

  it('should not care about separators', () => {
    expect(checkRomajiAnswer('いい or よい', 'ii or yoi')).toBe(ANSWER_CORRECT);
    expect(checkRomajiAnswer('いい or よい', 'iiyoi')).toBe(ANSWER_CORRECT);
    expect(checkRomajiAnswer('いい / よい', 'ii / yoi')).toBe(ANSWER_CORRECT);
    expect(checkRomajiAnswer('いい/よい', 'ii/yoi')).toBe(ANSWER_CORRECT);
    expect(checkRomajiAnswer('いい / よい', 'ii, yoi')).toBe(ANSWER_CORRECT);
    expect(checkRomajiAnswer('いい/よい', 'iiyoi')).toBe(ANSWER_CORRECT);
    expect(checkRomajiAnswer('いい or よい', 'iioryoi')).toBe(ANSWER_WRONG);
  });

  it('should handle mixed hiragana and katakana', () => {
    const kana = 'こよみ / カレンダー';
    expect(checkRomajiAnswer(kana, 'koyomi / karendaa')).toBe(ANSWER_CORRECT);
    expect(checkRomajiAnswer(kana, 'koyomikarendaa')).toBe(ANSWER_CORRECT);
  });

  it("should return almost for the wrong romanization of katakana long vowel for 'o' (ou vs. oo)", () => {
    expect(checkRomajiAnswer('フォーク', 'fuouku')).toBe(ANSWER_ALMOST);
    expect(checkRomajiAnswer('フォーク', 'fuooku')).toBe(ANSWER_CORRECT);
  });
});
