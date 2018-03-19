/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

type Props = {};

const StyledSpan = styled.span`
  white-space: nowrap;
`;

export default function NoBr(props: Props) {
  return <StyledSpan {...props} />;
}
NoBr.displayName = 'components/NoBr';
