/**
 * Kana character constants.
 *
 * https://en.wikipedia.org/wiki/Kana
 * https://en.wikipedia.org/wiki/Goj%C5%ABon
 * https://en.wikipedia.org/wiki/Y%C5%8Don
 * https://en.wikipedia.org/wiki/Yotsugana
 * https://en.wikipedia.org/wiki/Okurigana
 * https://unicode-table.com/en/blocks/hiragana/
 * https://unicode-table.com/en/blocks/katakana/
 * (https://unicode-table.com/en/blocks/cjk-unified-ideographs/)
 * http://www.rikai.com/library/kanjitables/kanji_codes.unicode.shtml
 */

export const ROMAJI_KEY = 0;
export const HIRAGANA_KEY = 1;
export const KATAKANA_KEY = 2;

export const GOJUON = [
  ['a', 'あ', 'ア'],
  ['i', 'い', 'イ'],
  ['u', 'う', 'ウ'],
  ['e', 'え', 'エ'],
  ['o', 'お', 'オ'],
  ['ka', 'か', 'カ'],
  ['ki', 'き', 'キ'],
  ['ku', 'く', 'ク'],
  ['ke', 'け', 'ケ'],
  ['ko', 'こ', 'コ'],
  ['sa', 'さ', 'サ'],
  ['shi', 'し', 'シ'],
  ['su', 'す', 'ス'],
  ['se', 'せ', 'セ'],
  ['so', 'そ', 'ソ'],
  ['ta', 'た', 'タ'],
  ['chi', 'ち', 'チ'],
  ['tsu', 'つ', 'ツ'],
  ['te', 'て', 'テ'],
  ['to', 'と', 'ト'],
  ['na', 'な', 'ナ'],
  ['ni', 'に', 'ニ'],
  ['nu', 'ぬ', 'ヌ'],
  ['ne', 'ね', 'ネ'],
  ['no', 'の', 'ノ'],
  ['ha', 'は', 'ハ'],
  ['hi', 'ひ', 'ヒ'],
  ['fu', 'ふ', 'フ'],
  ['he', 'へ', 'ヘ'],
  ['ho', 'ほ', 'ホ'],
  ['ma', 'ま', 'マ'],
  ['mi', 'み', 'ミ'],
  ['mu', 'む', 'ム'],
  ['me', 'め', 'メ'],
  ['mo', 'も', 'モ'],
  ['ya', 'や', 'ヤ'],
  ['yu', 'ゆ', 'ユ'],
  ['yo', 'よ', 'ヨ'],
  ['ra', 'ら', 'ラ'],
  ['ri', 'り', 'リ'],
  ['ru', 'る', 'ロ'],
  ['re', 'れ', 'レ'],
  ['ro', 'ろ', 'ロ'],
  ['wa', 'わ', 'ワ'],
  ['wo', 'を', 'ヲ'],
  ['n', 'ん', 'ン'],
];

export const GOJUON_DAKUTEN = [
  ['ga', 'が', 'ガ'],
  ['gi', 'ぎ', 'ギ'],
  ['gu', 'ぐ', 'グ'],
  ['ge', 'げ', 'ゲ'],
  ['go', 'ご', 'ゴ'],
  ['za', 'ざ', 'ザ'],
  ['ji', 'じ', 'ジ'],
  ['zu', 'ず', 'ズ'],
  ['ze', 'ぜ', 'ゼ'],
  ['zo', 'ぞ', 'ゾ'],
  ['da', 'だ', 'ダ'],
  ['ji', 'ぢ', 'ヂ'],
  ['zu', 'づ', 'ヅ'],
  ['de', 'で', 'デ'],
  ['do', 'ど', 'ド'],
  ['ba', 'ば', 'バ'],
  ['bi', 'び', 'ビ'],
  ['bu', 'ぶ', 'ブ'],
  ['be', 'べ', 'ベ'],
  ['bo', 'ぼ', 'ボ'],
  ['pa', 'ぱ', 'パ'],
  ['pi', 'ぴ', 'ピ'],
  ['pu', 'ぷ', 'プ'],
  ['pe', 'ぺ', 'ペ'],
  ['po', 'ぽ', 'ポ'],
];

export const YOUON = [
  ['kya', 'きゃ', 'キャ'],
  ['kyu', 'きゅ', 'キュ'],
  ['kyo', 'きょ', 'キョ'],
  ['sha', 'しゃ', 'シャ'],
  ['shu', 'しゅ', 'シュ'],
  ['sho', 'しょ', 'ショ'],
  ['cha', 'ちゃ', 'チャ'],
  ['chu', 'ちゅ', 'チュ'],
  ['cho', 'ちょ', 'チョ'],
  ['nya', 'にゃ', 'ニャ'],
  ['nyu', 'にゅ', 'ニュ'],
  ['nyo', 'にょ', 'ニョ'],
  ['hya', 'ひゃ', 'ヒャ'],
  ['hyu', 'ひゅ', 'ヒュ'],
  ['hyo', 'ひょ', 'ヒョ'],
  ['mya', 'みゃ', 'ミャ'],
  ['myu', 'みゅ', 'ミュ'],
  ['myo', 'みょ', 'ミョ'],
  ['rya', 'りゃ', 'リャ'],
  ['ryu', 'りゅ', 'リュ'],
  ['ryo', 'りょ', 'リョ'],
];

export const YOUON_DAKUTEN = [
  ['gya', 'ぎゃ', 'ギャ'],
  ['gyu', 'ぎゅ', 'ギュ'],
  ['gyo', 'ぎょ', 'ギョ'],
  ['ja', 'じゃ', 'ジャ'],
  ['ju', 'じゅ', 'ジュ'],
  ['jo', 'じょ', 'ジョ'],
  ['bya', 'びゃ', 'ビャ'],
  ['byu', 'びゅ', 'ビュ'],
  ['byo', 'びょ', 'ビョ'],
  ['pya', 'ぴゃ', 'ピャ'],
  ['pyu', 'ぴゅ', 'ピュ'],
  ['pyo', 'ぴょ', 'ピョ'],
];

export const ALL_KANA = [].concat(GOJUON, GOJUON_DAKUTEN, YOUON, YOUON_DAKUTEN);

export const SMALL_KANA = [
  ['a', 'ぁ', 'ァ'],
  ['i', 'ぃ', 'ィ'],
  ['u', 'ぅ', 'ゥ'],
  ['e', 'ぇ', 'ェ'],
  ['o', 'ぉ', 'ォ'],
  ['ya', 'ゃ', 'ャ'],
  ['yu', 'ゅ', 'ュ'],
  ['yo', 'ょ', 'ョ'],
  ['tsu', 'っ', 'ッ'],
  ['wa', 'ゎ', 'ヮ'],
];

export const KATAKANA_LONG_SOUND_MARK = 'ー';
