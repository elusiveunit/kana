/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { headerItemStyle } from '../style/mixins';
import VisuallyHidden from './VisuallyHidden';

const Button = styled.button`
  ${headerItemStyle};
  display: flex;
  align-items: center;
  border: 0;
  text-decoration: none;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.headerBackgroundHighlightLevel1};
  }
`;
const Link = Button.withComponent('a');

type Props = {
  text: string,
  children?: any,
  hasVisibleText?: boolean,
  href?: ?string,
  onClick?: ?() => void,
};

export default function HeaderItem(props: Props) {
  const TextWrap = props.hasVisibleText ? 'span' : VisuallyHidden;
  const Component = props.href ? Link : Button;

  return (
    <Component href={props.href} onClick={props.onClick}>
      <TextWrap>{props.text}</TextWrap>
      {props.children}
    </Component>
  );
}
HeaderItem.displayName = 'components/HeaderItem';
HeaderItem.defaultProps = {
  children: null,
  hasVisibleText: true,
  href: null,
  onClick: null,
};
