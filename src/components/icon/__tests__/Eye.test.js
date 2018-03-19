import React from 'react';
import { mount } from 'enzyme';

import Eye from '../Eye';

describe('Eye icon', () => {
  it('Renders without crashing', () => {
    mount(<Eye />);
  });
});
