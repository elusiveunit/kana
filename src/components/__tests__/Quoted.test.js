import React from 'react';
import { mount } from 'enzyme';

import Quoted from '../Quoted';

describe('Quoted', () => {
  it('Renders without crashing', () => {
    mount(<Quoted>Test</Quoted>);
  });
});
