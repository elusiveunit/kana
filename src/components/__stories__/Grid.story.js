/**
 * @flow
 */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { BG, Body } from '../../stories/helpers';
import { Grid, Item } from '../Grid';

// This will be huge with regular formatting rules
/* eslint-disable max-len */
// prettier-ignore
storiesOf('Grid', module)
  .add('Default', withInfo([
    'Import through the index file: `import { Grid, Item } from \'components/Grid\';`',
    'Default items are automatically sized.',
  ].join('\n\n'))(() => (
    <Body>
      <Grid>
        <Item><BG>Item</BG></Item>
        <Item><BG>Item</BG></Item>
        <Item><BG>This one has more content and will probably be larger</BG></Item>
      </Grid>
    </Body>
  )))
  .add('Fixed sizes', withInfo([
    'The `cols` prop is used to set a fixed size.',
    'A more freeform `width` prop can also be used. Remember to take the gutter size into account.',
  ].join('\n\n'))(() => (
    <Body>
      <Grid mb="30px">
        <Item cols={2}><BG>Item</BG></Item>
        <Item cols={4}><BG>Item</BG></Item>
        <Item cols={4}><BG>This one has more content but will not grow</BG></Item>
      </Grid>
      <Grid>
        <Item width="100px"><BG>100px</BG></Item>
        <Item width="5em"><BG>5em</BG></Item>
        <Item><BG>Auto/default</BG></Item>
      </Grid>
    </Body>
  )))
  .add('Gutter sizes', withInfo('Gutter sizes are set on the container.')(() => (
    <Body>
      <h3>None</h3>
      <Grid gutter={null} mb="20px">
        <Item><BG>Item</BG></Item>
        <Item><BG>Item</BG></Item>
        <Item><BG>Item</BG></Item>
      </Grid>
      <h3>Small</h3>
      <Grid gutter="small" mb="20px">
        <Item><BG>Item</BG></Item>
        <Item><BG>Item</BG></Item>
        <Item><BG>Item</BG></Item>
      </Grid>
      <h3>Medium</h3>
      <Grid gutter="medium" mb="20px">
        <Item><BG>Item</BG></Item>
        <Item><BG>Item</BG></Item>
        <Item><BG>Item</BG></Item>
      </Grid>
      <h3>Large</h3>
      <Grid gutter="large">
        <Item><BG>Item</BG></Item>
        <Item><BG>Item</BG></Item>
        <Item><BG>Item</BG></Item>
      </Grid>
    </Body>
  )))
  .add('Multiline', withInfo('Requires the `isMultiline` prop on the grid container and `cols` props on the items.')(() => (
    <Body>
      <Grid isMultiline>
        <Item cols={1}><BG>Item</BG></Item>

        <Item cols={2}><BG>Item</BG></Item>
        <Item cols={2}><BG>Item</BG></Item>

        <Item cols={3}><BG>Item</BG></Item>
        <Item cols={3}><BG>Item</BG></Item>
        <Item cols={3}><BG>Item</BG></Item>

        <Item cols={4}><BG>Item</BG></Item>
        <Item cols={4}><BG>Item</BG></Item>
        <Item cols={4}><BG>Item</BG></Item>
        <Item cols={4}><BG>Item</BG></Item>
      </Grid>
    </Body>
  )))
  .add('Multiline gutter', withInfo('The gutter also adds vertical spacing by default. Disable with the `hasVerticalGutter` prop.')(() => (
    <Body>
      <h3>None</h3>
      <Grid gutter={null} isMultiline mb="30px">
        <Item cols={1}><BG>Item</BG></Item>

        <Item cols={2}><BG>Item</BG></Item>
        <Item cols={2}><BG>Item</BG></Item>

        <Item cols={3}><BG>Item</BG></Item>
        <Item cols={3}><BG>Item</BG></Item>
        <Item cols={3}><BG>Item</BG></Item>
      </Grid>

      <h3>No vertical</h3>
      <Grid isMultiline hasVerticalGutter={false} mb="30px">
        <Item cols={1}><BG>Item</BG></Item>

        <Item cols={2}><BG>Item</BG></Item>
        <Item cols={2}><BG>Item</BG></Item>

        <Item cols={3}><BG>Item</BG></Item>
        <Item cols={3}><BG>Item</BG></Item>
        <Item cols={3}><BG>Item</BG></Item>
      </Grid>

      <h3>Small</h3>
      <Grid gutter="small" isMultiline mb="30px">
        <Item cols={1}><BG>Item</BG></Item>

        <Item cols={2}><BG>Item</BG></Item>
        <Item cols={2}><BG>Item</BG></Item>

        <Item cols={3}><BG>Item</BG></Item>
        <Item cols={3}><BG>Item</BG></Item>
        <Item cols={3}><BG>Item</BG></Item>
      </Grid>

      <h3>Medium</h3>
      <Grid gutter="medium" isMultiline mb="30px">
        <Item cols={1}><BG>Item</BG></Item>

        <Item cols={2}><BG>Item</BG></Item>
        <Item cols={2}><BG>Item</BG></Item>

        <Item cols={3}><BG>Item</BG></Item>
        <Item cols={3}><BG>Item</BG></Item>
        <Item cols={3}><BG>Item</BG></Item>
      </Grid>

      <h3>Lage</h3>
      <Grid gutter="large" isMultiline>
        <Item cols={1}><BG>Item</BG></Item>

        <Item cols={2}><BG>Item</BG></Item>
        <Item cols={2}><BG>Item</BG></Item>

        <Item cols={3}><BG>Item</BG></Item>
        <Item cols={3}><BG>Item</BG></Item>
        <Item cols={3}><BG>Item</BG></Item>
      </Grid>
    </Body>
  )))
  .add('Alignment', withInfo('Alignment can be set on both the container and individual items')(() => (
    <Body>
      <Grid verticalAlign="bottom" mb="30px" style={{ height: '100px' }}>
        <Item><BG>Aligned from container</BG></Item>
        <Item><BG>Aligned from container</BG></Item>
        <Item verticalAlign="top"><BG>Aligned item</BG></Item>
      </Grid>
      <Grid mb="30px" style={{ height: '100px' }}>
        <Item verticalAlign="bottom"><BG>Aligned item</BG></Item>
        <Item verticalAlign="middle"><BG>Aligned item</BG></Item>
        <Item verticalAlign="top"><BG>Aligned item</BG></Item>
      </Grid>
    </Body>
  )));
