import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import noop from 'lodash/noop';

import { light } from '../../style/theme';
import QuizForm from '../QuizForm';

describe('QuizForm', () => {
  it('Renders without crashing', () => {
    mount(
      <ThemeProvider theme={light}>
        <QuizForm
          fieldValue="val"
          word={{ kana: 'test', kanji: 'test', english: ['test'] }}
          onCheck={noop}
          onFieldChange={noop}
          onMeaningReveal={noop}
          onNext={noop}
          onShowAnswer={noop}
          onSkip={noop}
        />
      </ThemeProvider>,
    );
  });
});
