import React from 'react';
import { mount } from 'enzyme';

import GitHub from '../GitHub';

describe('GitHub icon', () => {
  it('Renders without crashing', () => {
    mount(<GitHub />);
  });
});
