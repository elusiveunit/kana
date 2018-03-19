import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import noop from 'lodash/noop';

import { light } from '../../style/theme';
import MeaningText from '../MeaningText';

describe('MeaningText', () => {
  it('Renders without crashing', () => {
    mount(
      <ThemeProvider theme={light}>
        <MeaningText
          onRevealPress={noop}
          meaning={['|English|: test', 'Testing']}
        />
      </ThemeProvider>,
    );
  });
});
