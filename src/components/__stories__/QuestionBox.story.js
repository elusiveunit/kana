/**
 * @flow
 */

import React from 'react';

import { storiesOf } from '@storybook/react';

import { Body } from '../../stories/helpers';
import QuestionBox from '../QuestionBox';

storiesOf('QuestionBox', module)
  .add('Default', () => (
    <Body>
      <QuestionBox>The question</QuestionBox>
    </Body>
  ))
  .add('Multiline', () => (
    <Body>
      <QuestionBox>
        This one <br />has multiple <br />text lines
      </QuestionBox>
    </Body>
  ));
