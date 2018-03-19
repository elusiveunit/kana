/**
 * @flow
 */

/*
eslint-disable import/no-extraneous-dependencies, import/prefer-default-export
*/

import React from 'react';

type BodyProps = {
  children: any,
};

export function Body(props: BodyProps) {
  return (
    <div className="story-body" style={{ margin: '40px' }}>
      {props.children}
    </div>
  );
}
Body.displayName = '[Body helper]';

type BGProps = {
  children: any,
  type?: 'none' | 'dark' | 'light',
  isInline?: boolean,
  padding?: string,
};

export function BG(props: BGProps) {
  const { type, isInline } = props;
  const style = {
    padding: props.padding,
  };
  if (type === 'dark') {
    style.background = '#222';
    style.color = '#fff';
  } else if (type === 'light') {
    style.background = '#fff';
    style.color = '#444';
  }
  if (isInline) {
    style.display = 'inline-block';
  }

  return <p style={style}>{props.children}</p>;
}
BG.displayName = '[BG helper]';
BG.defaultProps = {
  type: 'dark',
  isInline: false,
  padding: '15px',
};
