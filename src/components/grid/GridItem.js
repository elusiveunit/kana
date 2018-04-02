/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { FLEX_VERTICAL_ALIGN_MAP } from '../../constants/style';
import { media } from '../../style/mixins';
import { withSizePropStyles } from '../../utils/style';

const StyledDiv = styled.div`
  ${withSizePropStyles};
  ${(props) => (props.width ? `width: ${props.width};` : null)};
  ${(props) => (props.grow && !props.width ? 'flex-grow: 1;' : null)};
  ${(props) => (props.shrink === false ? 'flex-shrink: 0;' : null)};
  ${(props) => (props.cols ? `width: ${100 / props.cols}%;` : null)};
  ${(props) =>
    (FLEX_VERTICAL_ALIGN_MAP[props.verticalAlign]
      ? `align-self: ${FLEX_VERTICAL_ALIGN_MAP[props.verticalAlign]};`
      : null)};
  ${(props) =>
    (props.colsMedium ? media.medium`width: ${100 / props.colsMedium}%;` : null)};
  ${(props) =>
    (props.colsSmall ? media.small`width: ${100 / props.colsSmall}%;` : null)};
`;

type Props = {
  width?: ?string,
  cols?: ?number,
  colsMedium?: ?number,
  colsSmall?: ?number,
  grow?: boolean,
  shrink?: ?boolean,
  verticalAlign?: ?'top' | 'middle' | 'bottom',
};

export default function GridItem(props: Props) {
  return <StyledDiv {...props} />;
}
GridItem.displayName = 'components/GridItem';
GridItem.defaultProps = {
  width: null,
  cols: null,
  colsMedium: null,
  colsSmall: null,
  grow: true,
  shrink: null,
  verticalAlign: null,
};
