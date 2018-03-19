/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Body } from '../../stories/helpers';
import RevealButton from '../RevealButton';

storiesOf('RevealButton', module).add(
  'Default',
  withInfo('Button with an eye icon')(() => (
    <Body>
      <p>
        <RevealButton onClick={action('Clicked')} />
      </p>
      <p>
        <RevealButton disabled onClick={action('Clicked')} />
      </p>
    </Body>
  )),
);
