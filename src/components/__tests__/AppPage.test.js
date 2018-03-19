import React from 'react';
import { shallow } from 'enzyme';

import { light } from '../../style/theme';
import AppPage from '../AppPage';

describe('AppPage', () => {
  it('Renders without crashing', () => {
    shallow(<AppPage header={<div />} bodyContent={<div />} theme={light} />);
  });
});
