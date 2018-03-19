/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  p,
  ol,
  ul {
    &:not(:last-child) {
      margin-bottom: ${(props) => (props.isTight ? '0.75em' : '1.25em')};
    }
  }
`;

type Props = {
  isTight?: boolean,
};

export default function RichText(props: Props) {
  return <StyledDiv {...props} />;
}
RichText.displayName = 'components/RichText';
RichText.defaultProps = {
  isTight: false,
};
