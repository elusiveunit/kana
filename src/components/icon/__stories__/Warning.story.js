/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { BG, Body } from '../../../stories/helpers';
import Warning from '../Warning';

storiesOf('icon/Warning', module).add(
  'Default',
  withInfo('Warning triangle icon')(() => (
    <Body>
      <BG type="light" isInline>
        <Warning />
      </BG>
      <BG type="dark" isInline>
        <Warning color="#fff" />
      </BG>
      <BG type="light" isInline>
        <Warning size={32} />
      </BG>
      <BG type="dark" isInline>
        <Warning color="#fff" size={64} />
      </BG>
    </Body>
  )),
);
