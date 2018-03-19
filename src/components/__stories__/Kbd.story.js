/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Body, BG } from '../../stories/helpers';
import Kbd from '../Kbd';

storiesOf('Kbd', module).add(
  'Default',
  withInfo(
    'Styled <kbd> tag for denoting keyboard input. The colors depend on the current theme by default, but can be explicitly set with the `type` prop.',
  )(() => (
    <Body>
      <BG type="light">
        Press <Kbd>Ctrl</Kbd>+<Kbd>S</Kbd> to save
      </BG>
      <BG type="dark">
        Without the <code>type</code> prop, the colors are set for the light
        theme.<br />
        Press <Kbd>Ctrl</Kbd>+<Kbd>S</Kbd> to save
      </BG>
      <BG type="dark">
        Setting the <code>type</code> to <code>dark</code> overrides it.<br />
        Press <Kbd type="dark">Ctrl</Kbd>+<Kbd type="dark">S</Kbd> to save
      </BG>
    </Body>
  )),
);
