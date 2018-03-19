import { getKanaByRomaji } from '../kana';

describe('getKanaByRomaji', () => {
  it('returns an array of kana data objects', () => {
    expect(getKanaByRomaji('a')).toEqual([
      {
        romaji: 'a',
        hiragana: 'あ',
        katakana: 'ア',
      },
    ]);
  });

  it('returns multiple objects when applicable', () => {
    expect(getKanaByRomaji('ji')).toEqual([
      {
        romaji: 'ji',
        hiragana: 'じ',
        katakana: 'ジ',
      },
      {
        romaji: 'ji',
        hiragana: 'ぢ',
        katakana: 'ヂ',
      },
    ]);
  });

  it('returns null if there is no match', () => {
    expect(getKanaByRomaji('blabla')).toBeNull();
    expect(getKanaByRomaji(123)).toBeNull();
    expect(getKanaByRomaji(null)).toBeNull();
  });
});
