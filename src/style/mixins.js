/**
 * Style snippets shared between multiple components.
 *
 * @flow
 */

import { css } from 'styled-components';
import clamp from 'lodash/clamp';
import mapValues from 'lodash/mapValues';

import { THEME_DARK } from '../constants/app';
import { MEDIA_SIZES } from '../constants/style';
import { themeStatic } from '../style/theme';

// Create a media template tag for each size
// Use inside a style: ${media.small`display: block;`}
export const media = mapValues(
  MEDIA_SIZES,
  (size: number) => (...args: Array<any>) => css`
    @media (max-width: ${size / 16}em) {
      ${css(...args)};
    }
  `,
);

/**
 * Base style for interactive items (links, buttons...) in the app header.
 */
export const headerItemStyle = css`
  height: 55px;
  line-height: 55px;
  padding: 0 ${themeStatic.pageMargin};
  vertical-align: middle;
  background: inherit;
  color: inherit;
  white-space: nowrap;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.headerBackgroundHighlightLevel1};
  }
  ${media.small`
    height: 45px;
    line-height: 45px;
  `};
`;

/**
 * Get a dark or light color depending on the active theme.
 *
 * @param {Object} props - Component props.
 * @param {number} amount - Between 0 and 1.
 * @return {string}
 */
export function getToneColor(props: Object, amount: number): string {
  const alpha = clamp(amount, 0, 1);

  return props.theme.type === THEME_DARK
    ? `rgba(255, 255, 255, ${alpha})`
    : `rgba(0, 0, 0, ${alpha})`;
}
