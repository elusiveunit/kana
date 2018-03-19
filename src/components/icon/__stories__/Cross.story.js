/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { BG, Body } from '../../../stories/helpers';
import Cross from '../Cross';

storiesOf('icon/Cross', module).add(
  'Default',
  withInfo('Cross icon')(() => (
    <Body>
      <BG type="light" isInline>
        <Cross />
      </BG>
      <BG type="dark" isInline>
        <Cross color="#fff" />
      </BG>
      <BG type="light" isInline>
        <Cross size={32} />
      </BG>
      <BG type="dark" isInline>
        <Cross color="#fff" size={64} />
      </BG>
    </Body>
  )),
);
