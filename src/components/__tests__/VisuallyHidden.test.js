import React from 'react';
import { mount } from 'enzyme';

import VisuallyHidden from '../VisuallyHidden';

describe('VisuallyHidden', () => {
  it('Renders without crashing', () => {
    mount(<VisuallyHidden>Test</VisuallyHidden>);
  });
});
