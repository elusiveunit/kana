/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Body } from '../../stories/helpers';
import RichText from '../RichText';
import NoBr from '../NoBr';

storiesOf('NoBr', module).add(
  'Default',
  withInfo('Inline component that prevents line breaks')(() => (
    <Body>
      <div style={{ width: '100px', border: '1px solid rgba(0, 0, 0, 0.25)' }}>
        <RichText>
          <p>This text will break</p>
          <p>
            <NoBr>This text will not break</NoBr>
          </p>
          <p>
            This text will break, <NoBr>except this part inside of it.</NoBr>{' '}
            Anything after will also break.
          </p>
        </RichText>
      </div>
    </Body>
  )),
);
