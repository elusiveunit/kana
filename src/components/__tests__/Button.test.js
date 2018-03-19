import React from 'react';
import { mount } from 'enzyme';
import noop from 'lodash/noop';

import { light } from '../../style/theme';
import Button from '../Button';

describe('Button', () => {
  it('Renders without crashing', () => {
    mount(<Button onClick={noop} theme={light} />);
  });
});
