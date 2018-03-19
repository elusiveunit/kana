import React from 'react';
import { mount } from 'enzyme';

import HiddenWithWidth from '../HiddenWithWidth';

describe('HiddenWithWidth', () => {
  it('Renders without crashing', () => {
    mount(<HiddenWithWidth>Testing</HiddenWithWidth>);
  });
});
