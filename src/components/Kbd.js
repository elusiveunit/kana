/**
 * @flow
 */

import React from 'react';
import styled, { withTheme } from 'styled-components';

import { THEME_DARK, THEME_LIGHT } from '../constants/app';

const StyledKbd = styled.kbd`
  display: inline-block;
  margin: 0 1px;
  padding: 0 5px;
  font-size: 13px;
  background: ${(props) =>
    (props.type === 'light'
      ? 'rgba(0, 0, 0, 0.05)'
      : 'rgba(255, 255, 255, 0.15)')};
  border: 1px solid
    ${(props) =>
    (props.type === 'light'
      ? 'rgba(0, 0, 0, 0.2)'
      : 'rgba(255, 255, 255, 0.2)')};
  border-radius: 3px;
  box-shadow: ${(props) =>
    (props.type === 'light'
      ? '0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #fff inset'
      : '0 1px 0 rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.4) inset')};
  white-space: nowrap;
`;

const THEME_TYPES = {
  [THEME_LIGHT]: 'light',
  [THEME_DARK]: 'dark',
};

type Props = {
  theme: Object,
  type?: ?'light' | 'dark',
};

function Kbd(props: Props) {
  const type = props.type
    ? props.type
    : THEME_TYPES[props.theme.type] || 'light';

  return <StyledKbd {...props} type={type} />;
}
Kbd.displayName = 'components/Kbd';
Kbd.defaultProps = {
  type: null,
};

export default withTheme(Kbd);
