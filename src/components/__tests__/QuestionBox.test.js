import React from 'react';
import { mount } from 'enzyme';

import QuestionBox from '../QuestionBox';

describe('QuestionBox', () => {
  it('Renders without crashing', () => {
    mount(<QuestionBox>A word</QuestionBox>);
  });
});
