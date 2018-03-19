import React from 'react';
import { mount } from 'enzyme';

import Cross from '../Cross';

describe('Cross icon', () => {
  it('Renders without crashing', () => {
    mount(<Cross />);
  });
});
