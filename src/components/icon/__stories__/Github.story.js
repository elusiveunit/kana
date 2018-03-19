/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { BG, Body } from '../../../stories/helpers';
import GitHub from '../GitHub';

storiesOf('icon/GitHub', module).add(
  'Default',
  withInfo('GitHub logo icon')(() => (
    <Body>
      <BG type="light" isInline>
        <GitHub />
      </BG>
      <BG type="dark" isInline>
        <GitHub color="#fff" />
      </BG>
      <BG type="light" isInline>
        <GitHub scale={1.5} />
      </BG>
      <BG type="dark" isInline>
        <GitHub color="#fff" scale={2} />
      </BG>
    </Body>
  )),
);
