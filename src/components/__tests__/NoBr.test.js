import React from 'react';
import { mount } from 'enzyme';

import NoBr from '../NoBr';

describe('NoBr', () => {
  it('Renders without crashing', () => {
    mount(<NoBr>Testing a test</NoBr>);
  });
});
