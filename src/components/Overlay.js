/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { Z_INDEX } from '../constants/style';
import { tone } from '../utils/style';
import CrossIcon from './icon/Cross';
import VisuallyHidden from './VisuallyHidden';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.15s ease, background-color 0.15s ease;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  background-color: ${(props) => props.theme.pageBackgroundColor};
  overflow: auto;
  z-index: ${Z_INDEX.overlay};
`;
const Content = styled.div`
  transition: transform 0.15s ease;
  transform: translateY(${(props) => (props.isVisible ? 0 : '-10px')});
  transform-origin: 50% 0;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
  height: 45px;
  line-height: 45px;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  z-index: ${Z_INDEX.overlay + 1};

  &:hover,
  &:focus {
    background-color: ${(props) =>
    tone(props, props.theme.pageBackgroundColor, 0.05)};
  }
`;

type Props = {
  isVisible: boolean,
  theme: Object,
  children: mixed,
  onClosePress: () => void,
};

export default function Overlay(props: Props) {
  return (
    <Container isVisible={props.isVisible} theme={props.theme}>
      <CloseButton type="button" onClick={props.onClosePress}>
        <VisuallyHidden>Close</VisuallyHidden>
        <CrossIcon />
      </CloseButton>
      <Content isVisible={props.isVisible}>{props.children}</Content>
    </Container>
  );
}
Overlay.displayName = 'components/Overlay';
