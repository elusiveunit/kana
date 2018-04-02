/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Body } from '../../stories/helpers';
import KanaReference from '../KanaReference';

storiesOf('KanaReference', module).add(
  'Default',
  withInfo('A full reference of Hiragana and Katakana')(() => (
    <Body>
      <KanaReference />
    </Body>
  )),
);
