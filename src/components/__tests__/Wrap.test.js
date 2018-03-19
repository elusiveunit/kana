import React from 'react';
import { mount } from 'enzyme';

import Wrap from '../Wrap';

describe('Wrap', () => {
  it('Renders without crashing', () => {
    mount(<Wrap>Test</Wrap>);
  });
});
