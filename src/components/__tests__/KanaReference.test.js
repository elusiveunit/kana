import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { FONT_SERIF } from '../../constants/app';
import { light } from '../../style/theme';
import KanaReference from '../KanaReference';

describe('KanaReference', () => {
  it('Renders without crashing', () => {
    mount(
      <ThemeProvider theme={light}>
        <KanaReference kanaFont={FONT_SERIF} />
      </ThemeProvider>,
    );
  });
});
