/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { withSizePropStyles } from '../utils/style';

const StyledWrap = styled.div`
  ${withSizePropStyles};
  max-width: ${(props) => {
    const sizes = {
      wide: em(props.theme.pageWidthWide),
      regular: em(props.theme.pageWidthRegular),
      thin: em(props.theme.pageWidthThin),
    };

    return sizes[props.size] || props.size;
  }};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${(props) => props.theme.pageMargin};
  padding-right: ${(props) => props.theme.pageMargin};
`;

type Props = {
  size?: 'wide' | 'regular' | 'thin' | string,
};

export default function Wrap(props: Props) {
  return <StyledWrap {...props} />;
}
Wrap.displayName = 'components/wrap';
Wrap.defaultProps = {
  size: 'regular',
};
