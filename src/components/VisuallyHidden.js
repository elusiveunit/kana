/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

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

type Props = {};

export default function VisuallyHidden(props: Props) {
  return <StyledSpan {...props} />;
}
VisuallyHidden.displayName = 'components/VisuallyHidden';
