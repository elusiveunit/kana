import React from 'react';
import { mount } from 'enzyme';

import { light } from '../../style/theme';
import Kbd from '../Kbd';

describe('Kbd', () => {
  it('Renders without crashing', () => {
    mount(<Kbd theme={light}>Esc</Kbd>);
  });
});
