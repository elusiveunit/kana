import { THEME_DARK, THEME_LIGHT } from '../../constants/app';
import { STANDARD_SIZES } from '../../constants/style';
import {
  getSizeValue,
  getSizeRulesFromProps,
  withSizePropStyles,
  getToneFunc,
} from '../style';

describe('getSizeValue', () => {
  it('should return pixel values for numbers', () => {
    expect(getSizeValue(10)).toBe('10px');
  });

  it('should return the value as-is for strings', () => {
    expect(getSizeValue('10em')).toBe('10em');
    expect(getSizeValue('test')).toBe('test');
  });

  it('should standard values for specific keywords', () => {
    expect(getSizeValue('small')).toBe(STANDARD_SIZES.small);
    expect(getSizeValue('medium')).toBe(STANDARD_SIZES.medium);
    expect(getSizeValue('large')).toBe(STANDARD_SIZES.large);
  });
});

describe('getSizeRulesFromProps', () => {
  it('should transform shorthands to proper CSS rules', () => {
    const props = {
      mt: 10,
      mr: '10em',
      mb: '5px',
      pb: 'small',
    };
    const expected = {
      'margin-top': '10px',
      'margin-right': '10em',
      'margin-bottom': '5px',
      'padding-bottom': '10px',
    };

    expect(getSizeRulesFromProps(props)).toEqual(expected);
  });

  it('should handle custom horizontal/vertical props', () => {
    const props = {
      mh: 10,
      pv: '10em',
    };
    const expected = {
      'margin-left': '10px',
      'margin-right': '10px',
      'padding-top': '10em',
      'padding-bottom': '10em',
    };

    expect(getSizeRulesFromProps(props)).toEqual(expected);
  });
});

describe('withSizePropStyles', () => {
  it('should return relevant CSS rules from props', () => {
    const props = {
      mt: 10,
      mr: '10em',
      'margin-top': '40px',
      pb: 'small',
    };
    const expected = [
      'margin-top: 10px;',
      'margin-right: 10em;',
      'padding-bottom: 10px;',
    ].join('\n');

    expect(withSizePropStyles(props)).toEqual(expected);
  });

  it('should handle custom horizontal/vertical props', () => {
    const props = {
      mh: 'small',
      pv: '10em',
      'margin-top': '40px',
    };
    const expected = [
      'margin-left: 10px;',
      'margin-right: 10px;',
      'padding-top: 10em;',
      'padding-bottom: 10em;',
    ].join('\n');

    expect(withSizePropStyles(props)).toEqual(expected);
  });

  it('should override horizontal/vertical props if a specific direction is included', () => {
    const props = {
      mv: 10,
      mt: 5,
    };
    const expected = ['margin-top: 5px;', 'margin-bottom: 10px;'].join('\n');

    expect(withSizePropStyles(props)).toEqual(expected);
  });
});

describe('getToneFunc', () => {
  const themeDark = { type: THEME_DARK };
  const themeLight = { type: THEME_LIGHT };
  const middleGray = '#808080'; // rgb 128, 128, 128

  it('should return a function', () => {
    const darkFunc = getToneFunc({ theme: themeDark });
    const lightFunc = getToneFunc({ theme: themeLight });

    expect(typeof darkFunc).toBe('function');
    expect(typeof lightFunc).toBe('function');
  });

  it('should return a function that tones opposite of the current theme', () => {
    const darkFunc = getToneFunc({ theme: themeDark });
    const lightFunc = getToneFunc({ theme: themeLight });

    expect(darkFunc(1, middleGray)).toBe('#fff');
    expect(lightFunc(1, middleGray)).toBe('#000');
  });

  it('should return a function that tones the same as the current theme', () => {
    const darkFunc = getToneFunc({ theme: themeDark }, true);
    const lightFunc = getToneFunc({ theme: themeLight }, true);

    expect(darkFunc(1, middleGray)).toBe('#000');
    expect(lightFunc(1, middleGray)).toBe('#fff');
  });
});
