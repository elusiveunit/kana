/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import type { Node } from 'react';

import { styleObjectToRules } from '../utils/style';

const StyledSpan = styled.span`
  display: block;
  overflow: hidden;
  ${(props) =>
    (props.isScreenReaderAccessible
      ? styleObjectToRules({
        height: '1px',
        'padding-top': '1px',
        'margin-top': '-1px',
      })
      : styleObjectToRules({
        height: '0',
        visibility: 'hidden',
      }))};
`;

type Props = {
  isScreenReaderAccessible?: boolean,
};

export default function HiddenWithWidth(props: Props): Node {
  const { isScreenReaderAccessible } = props;
  const role = !isScreenReaderAccessible ? 'presentation' : null;
  const ariaHidden = !isScreenReaderAccessible ? 'true' : null;

  return <StyledSpan {...props} role={role} aria-hidden={ariaHidden} />;
}
HiddenWithWidth.displayName = 'components/HiddenWithWidth';
HiddenWithWidth.defaultProps = {
  isScreenReaderAccessible: true,
};
