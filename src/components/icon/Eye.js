/**
 * @flow
 */

import React from 'react';

import SVG from './BaseSVG';

type Props = {
  color?: string,
  size?: number,
};

export default function Eye(props: Props) {
  return (
    <SVG
      width={props.size}
      height={props.size}
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path
        fill={props.color}
        d="M8 3c-3.489 0-6.514 2.032-8 5 1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5zM11.945 5.652c0.94 0.6 1.737 1.403 2.335 2.348-0.598 0.946-1.395 1.749-2.335 2.348-1.181 0.753-2.545 1.152-3.944 1.152s-2.763-0.398-3.945-1.152c-0.94-0.6-1.737-1.403-2.335-2.348 0.598-0.946 1.395-1.749 2.335-2.348 0.061-0.039 0.123-0.077 0.185-0.114-0.156 0.427-0.241 0.888-0.241 1.369 0 2.209 1.791 4 4 4s4-1.791 4-4c0-0.481-0.085-0.942-0.241-1.369 0.062 0.037 0.124 0.075 0.185 0.114v0zM8 6.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5 0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5z"
      />
    </SVG>
  );
}
Eye.displayName = 'icon/Eye';
Eye.defaultProps = {
  color: 'currentColor',
  size: 16,
};
