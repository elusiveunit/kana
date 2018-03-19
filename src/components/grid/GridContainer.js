/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { FLEX_VERTICAL_ALIGN_MAP, STANDARD_SIZES } from '../../constants/style';
import { media } from '../../style/mixins';
import { styleObjectToRules, withSizePropStyles } from '../../utils/style';
import type { MediaSize } from '../../types';

const StyledDiv = styled.div`
  ${withSizePropStyles};
  position: relative;
  display: flex;
  flex-wrap: ${(props) => (props.isMultiline ? 'wrap' : 'nowrap')};
  ${(props) =>
    (props.multilineWhen ? media[props.multilineWhen]`flex-wrap: wrap;` : null)};
  ${(props) =>
    (FLEX_VERTICAL_ALIGN_MAP[props.verticalAlign]
      ? `align-items: ${FLEX_VERTICAL_ALIGN_MAP[props.verticalAlign]};`
      : null)};
  ${(props) => {
    const gutterSize = STANDARD_SIZES[props.gutter];

    if (gutterSize) {
      const mainRules = {
        'margin-left': `-${gutterSize}`,
      };
      const childRules = {
        'padding-left': gutterSize,
      };

      if (props.isMultiline && props.hasVerticalGutter) {
        mainRules['margin-top'] = `-${gutterSize}`;
        childRules['margin-top'] = gutterSize;
      }
      return `
        ${styleObjectToRules(mainRules)}
        > div {
          ${styleObjectToRules(childRules)}
        }
      `;
    }

    return '';
  }};
  `;

type Props = {
  isMultiline?: boolean,
  multilineWhen?: MediaSize,
  gutter?: 'small' | 'medium' | 'large',
  hasVerticalGutter?: boolean,
  verticalAlign?: ?'top' | 'middle' | 'bottom',
};

export default function GridContainer(props: Props) {
  return <StyledDiv {...props} />;
}
GridContainer.displayName = 'components/Grid';
GridContainer.defaultProps = {
  isMultiline: false,
  multilineWhen: null,
  hasVerticalGutter: true,
  gutter: 'small',
  verticalAlign: null,
};
