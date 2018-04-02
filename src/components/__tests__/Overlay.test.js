import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { light } from '../../style/theme';
import Overlay from '../Overlay';

describe('Overlay', () => {
  it('Renders without crashing', () => {
    mount(
      <ThemeProvider theme={light}>
        <Overlay />
      </ThemeProvider>,
    );
  });
});
