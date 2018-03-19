/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import upperFirst from 'lodash/upperFirst';
import type { Node } from 'react';

import RevealButton from './RevealButton';

const Outer = styled.div`
  min-height: 5em;
`;
const TextContainer = styled.div`
  padding: 2px;
  font-size: calc(14px + 0.2vw);
`;

type Props = {
  meaning: Array<string>,
  isVisible: boolean,
  onRevealPress: (e: Object) => void,
};

function getFormattedMeaning(meaning: string): string {
  return upperFirst(meaning.replace('|', '<strong>').replace('|', '</strong>'));
}

export default function MeaningText(props: Props): Node {
  /* eslint-disable react/no-danger */

  const { isVisible, meaning, onRevealPress } = props;

  const content =
    meaning.length > 1 ? (
      <ul>
        {meaning.map((item) => (
          <li
            key={item}
            dangerouslySetInnerHTML={{
              __html: getFormattedMeaning(item),
            }}
          />
        ))}
      </ul>
    ) : (
      <p
        dangerouslySetInnerHTML={{
          __html: getFormattedMeaning(meaning[0]),
        }}
      />
    );

  return (
    <Outer>
      {isVisible && <TextContainer>{content}</TextContainer>}
      {!isVisible && <RevealButton onClick={onRevealPress} />}
    </Outer>
  );
}
MeaningText.displayName = 'components/MeaningText';
