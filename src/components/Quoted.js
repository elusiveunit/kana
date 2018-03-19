/**
 * @flow
 */

import React from 'react';

import NoBr from './NoBr';

type Props = {
  children: mixed,
  quotes?: 'single' | 'double',
  nobr?: boolean,
};

export default function Quoted(props: Props) {
  const Container = props.nobr ? NoBr : 'span';
  const isDouble = props.quotes === 'double';
  const open = isDouble ? '\u201C' : '\u2018';
  const close = isDouble ? '\u201D' : '\u2019';

  return (
    <Container>
      {open}
      {props.children}
      {close}
    </Container>
  );
}
Quoted.displayName = 'components/Quoted';
Quoted.defaultProps = {
  quotes: 'double',
  nobr: false,
};
