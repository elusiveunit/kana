/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Body } from '../../stories/helpers';
import Button from '../Button';

storiesOf('Button', module)
  .add(
    'Regular',
    withInfo('Regular buttons in their default state')(() => (
      <Body>
        <p>
          <Button onClick={action('Clicked primary')} variant="primary">
            Primary
          </Button>
        </p>
        <p>
          <Button onClick={action('Clicked secondary')} variant="secondary">
            Secondary
          </Button>
        </p>
        <p>
          <Button onClick={action('Clicked success')} variant="success">
            Success
          </Button>
        </p>
        <p>
          <Button onClick={action('Clicked warning')} variant="warning">
            Warning
          </Button>
        </p>
        <p>
          <Button onClick={action('Clicked danger')} variant="danger">
            Danger
          </Button>
        </p>
      </Body>
    )),
  )
  .add(
    'Disabled',
    withInfo("Disabled buttons are dimmed and can't be interacted with")(() => (
      <Body>
        <p>
          <Button
            disabled
            onClick={action('Clicked primary')}
            variant="primary"
          >
            Primary
          </Button>
        </p>
        <p>
          <Button
            disabled
            onClick={action('Clicked secondary')}
            variant="secondary"
          >
            Secondary
          </Button>
        </p>
        <p>
          <Button
            disabled
            onClick={action('Clicked success')}
            variant="success"
          >
            Success
          </Button>
        </p>
        <p>
          <Button
            disabled
            onClick={action('Clicked warning')}
            variant="warning"
          >
            Warning
          </Button>
        </p>
        <p>
          <Button disabled onClick={action('Clicked danger')} variant="danger">
            Danger
          </Button>
        </p>
      </Body>
    )),
  );
