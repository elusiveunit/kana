import React from 'react';
import { mount } from 'enzyme';

import Check from '../Check';

describe('Check icon', () => {
  it('Renders without crashing', () => {
    mount(<Check />);
  });
});
