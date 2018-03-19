import React from 'react';
import { shallow } from 'enzyme';
import noop from 'lodash/noop';

import Header from '../Header';

describe('Header', () => {
  it('Renders without crashing', () => {
    shallow(
      <Header onThemeChange={noop} onKanjiChange={noop} onFontChange={noop} />,
    );
  });
});
