/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { BG, Body } from '../../../stories/helpers';
import Eye from '../Eye';

storiesOf('icon/Eye', module).add(
  'Default',
  withInfo('Eye icon')(() => (
    <Body>
      <BG type="light" isInline>
        <Eye />
      </BG>
      <BG type="dark" isInline>
        <Eye color="#fff" />
      </BG>
      <BG type="light" isInline>
        <Eye size={32} />
      </BG>
      <BG type="dark" isInline>
        <Eye color="#fff" size={64} />
      </BG>
    </Body>
  )),
);
