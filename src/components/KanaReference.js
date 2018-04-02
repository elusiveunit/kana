/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { TYPE_HIRAGANA, TYPE_KATAKANA } from '../constants/kana';
import { media } from '../style/mixins';
import { Grid, Item } from './Grid';
import KanaTable from './KanaTable';
import Wrap from './Wrap';

const CustomWrap = styled(Wrap)`
  ${media.medium`max-width: 450px`};
`;
const Heading = styled.h2`
  margin: 10px 0 5px 45px;
`;

type Props = {
  kanaFont: string,
};

export default function KanaReference(props: Props) {
  return (
    <CustomWrap pt="10px" pb="10px" size="850px">
      <Grid isMultiline>
        <Item cols={2} colsMedium={1}>
          <Heading>Hiragana</Heading>
          <KanaTable kanaFont={props.kanaFont} type={TYPE_HIRAGANA} />
        </Item>
        <Item cols={2} colsMedium={1}>
          <Heading>Katakana</Heading>
          <KanaTable kanaFont={props.kanaFont} type={TYPE_KATAKANA} />
        </Item>
      </Grid>
    </CustomWrap>
  );
}
KanaReference.displayName = 'components/KanaReference';
