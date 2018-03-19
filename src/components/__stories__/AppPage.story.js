/**
 * @flow
 */

import React from 'react';

import { storiesOf } from '@storybook/react';

import { BG } from '../../stories/helpers';
import AppPage from '../AppPage';
import Wrap from '../Wrap';

storiesOf('AppPage', module)
  .add('Default', () => (
    <AppPage
      bodyContent={
        <Wrap>
          <BG>Page content</BG>
        </Wrap>
      }
    />
  ))
  .add('Large content', () => (
    <AppPage
      bodyContent={
        <Wrap>
          <BG>This</BG>
          <BG>page</BG>
          <BG>content</BG>
          <BG>will</BG>
          <BG>probably</BG>
          <BG>be</BG>
          <BG>tall</BG>
          <BG>enough</BG>
          <BG>to</BG>
          <BG>cause</BG>
          <BG>scrolling.</BG>
          <BG>The</BG>
          <BG>layout</BG>
          <BG>should</BG>
          <BG>still</BG>
          <BG>work</BG>
          <BG>fine.</BG>
        </Wrap>
      }
    />
  ));
