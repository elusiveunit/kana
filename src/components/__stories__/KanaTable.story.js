/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Body } from '../../stories/helpers';
import { TYPE_HIRAGANA, TYPE_KATAKANA } from '../../constants/kana';
import KanaTable from '../KanaTable';

storiesOf('KanaTable', module)
  .add(
    'Hiragana',
    withInfo('Two tables for Hiragana')(() => (
      <Body>
        <KanaTable type={TYPE_HIRAGANA} />
      </Body>
    )),
  )
  .add(
    'Katakana',
    withInfo('Two tables for Katakana')(() => (
      <Body>
        <KanaTable type={TYPE_KATAKANA} />
      </Body>
    )),
  );
