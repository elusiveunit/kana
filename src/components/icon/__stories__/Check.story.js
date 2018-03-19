/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { BG, Body } from '../../../stories/helpers';
import Check from '../Check';

storiesOf('icon/Check', module).add(
  'Default',
  withInfo('Checkmark icon')(() => (
    <Body>
      <BG type="light" isInline>
        <Check />
      </BG>
      <BG type="dark" isInline>
        <Check color="#fff" />
      </BG>
      <BG type="light" isInline>
        <Check size={32} />
      </BG>
      <BG type="dark" isInline>
        <Check color="#fff" size={64} />
      </BG>
    </Body>
  )),
);
