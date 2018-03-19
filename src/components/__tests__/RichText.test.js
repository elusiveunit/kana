import React from 'react';
import { mount } from 'enzyme';

import RichText from '../RichText';

describe('RichText', () => {
  it('Renders without crashing', () => {
    mount(
      <RichText>
        <p>Test</p>
        <ul>
          <li>Testing</li>
        </ul>
      </RichText>,
    );
  });
});
