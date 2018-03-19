import React from 'react';
import { shallow } from 'enzyme';

import Quiz from '../Quiz';

describe('Quiz', () => {
  it('Renders without crashing', () => {
    shallow(<Quiz />);
  });
});
