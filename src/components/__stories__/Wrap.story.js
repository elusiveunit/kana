/**
 * @flow
 */

import React from 'react';

import { storiesOf } from '@storybook/react';

import { BG } from '../../stories/helpers';
import Wrap from '../Wrap';

storiesOf('Wrap', module)
  .add('Default', () => (
    <div>
      <Wrap size="wide">
        <BG>Wide</BG>
      </Wrap>
      <Wrap size="regular">
        <BG>Regular</BG>
      </Wrap>
      <Wrap size="thin">
        <BG>Thin</BG>
      </Wrap>
    </div>
  ))
  .add('With dimension props', () => (
    <div>
      <Wrap size="wide" mt="3em">
        <BG>Wide: custom large top margin</BG>
      </Wrap>
      <Wrap size="regular" ml="10px" mr="10px" ph="2vw">
        <BG>Regular: ignores left/right margin but not padding</BG>
      </Wrap>
      <Wrap size="thin" m="large">
        <BG>
          Thin: large keyword universal margin, still ignored on the sides
        </BG>
      </Wrap>
    </div>
  ));
