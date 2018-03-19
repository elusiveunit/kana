/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Body } from '../../stories/helpers';
import Quoted from '../Quoted';
import RichText from '../RichText';

storiesOf('Quoted', module)
  .add(
    'Default',
    withInfo('Text with quotes around it')(() => (
      <Body>
        <RichText>
          <p>
            This is a paragraph that has <Quoted>some quoted text</Quoted>{' '}
            inside of it.
          </p>
          <p>
            There are also <Quoted quotes="single">single quotes</Quoted>{' '}
            available.
          </p>
        </RichText>
      </Body>
    )),
  )
  .add(
    'Without line breaks',
    withInfo(
      'Line breaks can be disabled inside the quoted text with the `nobr` prop',
    )(() => (
      <Body>
        <RichText>
          <div style={{ width: '400px' }}>
            <p>
              This is a narrow container with some{' '}
              <Quoted>
                quoted text that will continue on the following line
              </Quoted>. By default it works as expected.
            </p>
            <p>
              If the <code>nobr</code> props is set however,{' '}
              <Quoted nobr>the quoted text is not allowed to break</Quoted>.
              This should probably only be used on very short strings.
            </p>
          </div>
        </RichText>
      </Body>
    )),
  );
