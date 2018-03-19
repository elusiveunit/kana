import React from 'react';
import { mount } from 'enzyme';

import { Grid, Item } from '../Grid';

describe('Grid', () => {
  it('Renders without crashing', () => {
    mount(
      <Grid>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
      </Grid>,
    );
  });
});
