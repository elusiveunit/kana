/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { BG } from '../../stories/helpers';
import HiddenWithWidth from '../HiddenWithWidth';

storiesOf('HiddenWithWidth', module)
  .add(
    'Default',
    withInfo(
      'Used to hide content while still keeping the calculated width of said content for the container',
    )(() => (
      <div>
        <BG isInline>Short text</BG>
        <div />
        <BG isInline>
          <HiddenWithWidth>Hidden longer text expands the box</HiddenWithWidth>
          Short text
        </BG>
      </div>
    )),
  )
  .add(
    'Screen readers',
    withInfo(
      'The text tries to be screen reader friendly by default. Setting the `isScreenReaderAccessible` to false will explicitly hide the text from assistive technology.',
    )(() => (
      <div>
        <BG isInline>
          <HiddenWithWidth>The hidden text goes here</HiddenWithWidth>
          Readable hidden
        </BG>
        <BG isInline>
          <HiddenWithWidth isScreenReaderAccessible={false}>
            The hidden text goes here
          </HiddenWithWidth>
          Fully hidden
        </BG>
      </div>
    )),
  );
