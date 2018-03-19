/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Body } from '../../stories/helpers';
import { Grid, Item } from '../Grid';
import Wrap from '../Wrap';
import TextField from '../TextField';
import Button from '../Button';

storiesOf('TextField', module)
  .add(
    'Regular',
    withInfo('Text inputs in their default state')(() => (
      <Body>
        <Wrap size="thin">
          <TextField
            onChange={action('Default change')}
            label="Label for default text field"
            value="A default field value"
          />
        </Wrap>
        <Wrap size="thin" mt="20px">
          <TextField
            onChange={action('Email change')}
            type="email"
            label="Email"
          />
        </Wrap>
        <Wrap size="thin" mt="20px">
          <TextField onChange={action('Tel change')} type="tel" label="Tel" />
        </Wrap>
        <Wrap size="thin" mt="20px">
          <TextField onChange={action('URL change')} type="url" label="URL" />
        </Wrap>
        <Wrap size="thin" mt="20px">
          <TextField
            onChange={action('Password change')}
            type="password"
            label="Password"
          />
        </Wrap>
        <Wrap size="thin" mt="20px">
          <TextField
            onChange={action('Search change')}
            type="search"
            label="Search"
          />
        </Wrap>
      </Body>
    )),
  )
  .add(
    'With button',
    withInfo('Buttons match the field height')(() => (
      <Body>
        <Wrap size="thin">
          <Grid verticalAlign="bottom">
            <Item>
              <TextField
                onChange={action('Change')}
                label="The label"
                value="The value"
              />
            </Item>
            <Item grow={false}>
              <Button onClick={action('Button click')}>Button</Button>
            </Item>
          </Grid>
        </Wrap>
      </Body>
    )),
  )
  .add(
    'Status',
    withInfo(
      'Fields can have a status prop for showing the result of validation',
    )(() => (
      <Body>
        <Wrap size="thin">
          <TextField
            onChange={action('Change')}
            label="Label"
            value="Success"
            status="success"
          />
        </Wrap>
        <Wrap size="thin" mt="20px">
          <TextField
            onChange={action('Change')}
            label="Label"
            value="Warning"
            status="warning"
          />
        </Wrap>
        <Wrap size="thin" mt="20px">
          <TextField
            onChange={action('Change')}
            label="Label"
            value="Error, the field should have padding to prevent the icon from overlapping the text"
            status="error"
          />
        </Wrap>
      </Body>
    )),
  );
