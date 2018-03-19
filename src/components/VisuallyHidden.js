/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

type Props = {};

const StyledSpan = styled.span`
  clip: rect(0 0 0 0);
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  white-space: nowrap;
`;

export default function VisuallyHidden(props: Props) {
  return <StyledSpan {...props} />;
}
VisuallyHidden.displayName = 'components/VisuallyHidden';
