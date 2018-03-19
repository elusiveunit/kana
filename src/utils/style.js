/**
 * @flow
 */

import reduce from 'lodash/reduce';
import { darken, lighten } from 'polished';
import clamp from 'lodash/clamp';

import { THEME_DARK } from '../constants/app';
import { STANDARD_SIZES } from '../constants/style';
import { assign } from './object';

const SIZE_PROPS = {
  m: 'margin',
  mt: 'margin-top',
  mr: 'margin-right',
  mb: 'margin-bottom',
  ml: 'margin-left',
  p: 'padding',
  pt: 'padding-top',
  pr: 'padding-right',
  pb: 'padding-bottom',
  pl: 'padding-left',

  // Horizontal and vertical, inspired by React Native
  mh: ['margin-left', 'margin-right'],
  mv: ['margin-top', 'margin-bottom'],
  ph: ['padding-left', 'padding-right'],
  pv: ['padding-top', 'padding-bottom'],
};
const SIZE_PROP_NAMES = Object.keys(SIZE_PROPS);

/**
 * Get a value for a size style rule.
 *
 * @param {string|number} rawVal - Can be a predefined size like 'large', a
 *   number that will be used as a pixel value or any other value used as is.
 * @return {string}
 * @example
 *
 * getSizeValue(20)
 * // => '20px'
 *
 * getSizeValue('small')
 * // => '10px'
 *
 * getSizeValue('1em')
 * // => '1em'
 */
export function getSizeValue(rawVal: string | number): string {
  if (STANDARD_SIZES[rawVal]) {
    return STANDARD_SIZES[rawVal];
  } else if (typeof rawVal === 'number') {
    return `${rawVal}px`;
  }

  return rawVal;
}

/**
 * Get style rules from component props.
 *
 * @param {Object} props - Any component's props.
 * @return {Object} Style rules as key value pairs.
 * @example
 *
 * getSizeRulesFromProps({ pt: 'small' })
 * // => { 'padding-top': '10px' }
 */
export function getSizeRulesFromProps(props: Object): Object {
  return reduce(
    props,
    (rules, propValue, propName) => {
      if (SIZE_PROP_NAMES.includes(propName)) {
        const ruleName = SIZE_PROPS[propName];
        const addedRules = Array.isArray(ruleName)
          ? ruleName.reduce(
            (r, name) => assign(r, { [name]: getSizeValue(propValue) }),
            {},
          )
          : { [ruleName]: getSizeValue(propValue) };

        return assign(rules, addedRules);
      }

      return rules;
    },
    {},
  );
}

/**
 * Convert an object of style rules to a CSS string.
 *
 * @param {Object} styles - Style rules.
 * @return {string}
 * @example
 *
 * styleObjectToRules({ 'margin': 'auto', 'padding-top': '10px' })
 * // | = newline
 * // => 'margin: auto;|padding-top: 10px;'
 */
export function styleObjectToRules(styles: Object): string {
  return reduce(
    styles,
    (rules, value, ruleName) => rules.concat(`${ruleName}: ${value};`),
    [],
  ).join('\n');
}

/**
 * Get style rules from defined size props. Use as an interpolation callback.
 *
 * @param {Object} props - Any component's props.
 * @return {string}
 * @example
 *
 * const SomeComponent = styled.div`
 *   ${withSizePropStyles};
 * `;
 *
 * // SomeComponent now handles sizing props.
 * <SomeComponent mt="small" pb={15} mr="1em" />
 */
export function withSizePropStyles(props: Object): string {
  return styleObjectToRules(getSizeRulesFromProps(props));
}

/**
 * Get a function for toning colors depending on the active theme.
 *
 * @param {Object} props - Any component's props.
 * @param {boolean} [reverse] - Reverse the toning; use lighten when the light
 *   theme is active and vice versa.
 * @return {Function}
 */
export function getToneFunc(
  props: Object,
  reverse?: boolean = false,
): (amount: number, color: string) => string {
  return props.theme.type === THEME_DARK || reverse ? lighten : darken;
}

/**
 * Tone a color depending on the active theme.
 *
 * @param {Object} props - Any component's props.
 * @param {string} color - The color to tone.
 * @param {amount} number - Adjustment between 0 and 1.
 * @param {boolean} [reverse] - Reverse the toning; lighten when the light theme
 *   is active and vice versa.
 * @return {string}
 */
export function tone(
  props: Object,
  color: string,
  amount: number,
  reverse?: boolean = false,
): string {
  return getToneFunc(props, reverse)(clamp(amount, 0, 1), color);
}
