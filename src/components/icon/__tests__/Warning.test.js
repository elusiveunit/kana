import React from 'react';
import { mount } from 'enzyme';

import Warning from '../Warning';

describe('Warning icon', () => {
  it('Renders without crashing', () => {
    mount(<Warning />);
  });
});
