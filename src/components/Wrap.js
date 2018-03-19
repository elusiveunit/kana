/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { withSizePropStyles } from '../utils/style';

type Props = {
  size?: 'wide' | 'regular' | 'thin',
};

const StyledWrap = styled.div`
  ${withSizePropStyles};
  max-width: ${(props) => {
    const sizes = {
      wide: em(props.theme.pageWidthWide),
      regular: em(props.theme.pageWidthRegular),
      thin: em(props.theme.pageWidthThin),
    };
    const size = props.size || 'regular';

    return sizes[size];
  }};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${(props) => props.theme.pageMargin};
  padding-right: ${(props) => props.theme.pageMargin};
`;

export default function Wrap(props: Props) {
  return <StyledWrap {...props} />;
}
Wrap.displayName = 'components/wrap';
Wrap.defaultProps = {
  size: 'regular',
};