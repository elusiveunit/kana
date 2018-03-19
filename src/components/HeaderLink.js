/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { headerItemStyle } from '../style/mixins';
import VisuallyHidden from './VisuallyHidden';

const Link = styled.a`
  ${headerItemStyle};
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.headerBackgroundHighlightLevel1};
  }
`;

type Props = {
  href: string,
  text: string,
  children?: any,
  hasVisibleText?: boolean,
};

export default function HeaderLink(props: Props) {
  const TextWrap = props.hasVisibleText ? 'span' : VisuallyHidden;

  return (
    <Link href={props.href}>
      <TextWrap>{props.text}</TextWrap>
      {props.children}
    </Link>
  );
}
HeaderLink.displayName = 'components/HeaderLink';
HeaderLink.defaultProps = {
  hasVisibleText: true,
  children: null,
};
