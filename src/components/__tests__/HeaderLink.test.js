import React from 'react';
import { mount } from 'enzyme';

import HeaderLink from '../HeaderLink';

describe('HeaderLink', () => {
  it('Renders without crashing', () => {
    mount(<HeaderLink text="Test" />);
  });
});
