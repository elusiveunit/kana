/**
 * @flow
 */

import React from 'react';

import SVG from './BaseSVG';

type Props = {
  color?: string,
  size?: number,
};

export default function Check(props: Props) {
  return (
    <SVG
      width={props.size}
      height={props.size}
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path
        fill={props.color}
        d="M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z"
      />
    </SVG>
  );
}
Check.displayName = 'icon/Check';
Check.defaultProps = {
  color: 'currentColor',
  size: 16,
};
