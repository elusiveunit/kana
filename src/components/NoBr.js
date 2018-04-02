/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  white-space: nowrap;
`;

type Props = {};

export default function NoBr(props: Props) {
  return <StyledSpan {...props} />;
}
NoBr.displayName = 'components/NoBr';
