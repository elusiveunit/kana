import React from 'react';
import { mount } from 'enzyme';
import noop from 'lodash/noop';

import { light } from '../../style/theme';
import RevealButton from '../RevealButton';

describe('RevealButton', () => {
  it('Renders without crashing', () => {
    mount(<RevealButton onClick={noop} theme={light} />);
  });
});
