import React from 'react';
import { mount } from 'enzyme';
import noop from 'lodash/noop';

import HeaderItem from '../HeaderItem';

describe('HeaderItem', () => {
  it('Renders without crashing', () => {
    mount(
      <div>
        <HeaderItem text="Link" href="#" />
        <HeaderItem text="Button" onClick={noop} />
      </div>,
    );
  });
});
