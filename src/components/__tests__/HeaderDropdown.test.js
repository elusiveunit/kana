import React from 'react';
import { mount } from 'enzyme';

import HeaderDropdown from '../HeaderDropdown';

describe('HeaderDropdown', () => {
  it('Renders without crashing', () => {
    mount(
      <HeaderDropdown text="Test">
        <p>Content</p>
      </HeaderDropdown>,
    );
  });
});
