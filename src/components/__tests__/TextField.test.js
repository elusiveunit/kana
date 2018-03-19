import React from 'react';
import { mount } from 'enzyme';

import { light } from '../../style/theme';
import TextField from '../TextField';

describe('TextField', () => {
  it('Renders without crashing', () => {
    mount(<TextField label="Test" name="testing" theme={light} />);
  });
});
