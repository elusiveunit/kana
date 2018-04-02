/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import type { Node } from 'react';

import { DEFAULT_SETTINGS, SETTINGS_KEY_FONT } from '../constants/app';
import { KANA_FONT_MAP } from '../constants/style';
import { getToneColor, media } from '../style/mixins';

const Container = styled.div`
  padding: 10px 20px;
  border: 1px solid ${(props) => getToneColor(props, 0.05)};
  background: ${(props) => getToneColor(props, 0.02)};
  font-family: ${(props) =>
    KANA_FONT_MAP[props.kanaFont] || DEFAULT_SETTINGS[SETTINGS_KEY_FONT]};
  font-size: calc(18px + 1.5vw);

  ${media.small`
    padding: 6px 12px;
  `};
`;

type Props = {
  children: mixed,
  kanaFont?: string,
};

export default function QuestionBox(props: Props): Node {
  return <Container kanaFont={props.kanaFont}>{props.children}</Container>;
}
QuestionBox.displayName = 'components/QuestionBox';
QuestionBox.defaultProps = {
  kanaFont: DEFAULT_SETTINGS[SETTINGS_KEY_FONT],
};
