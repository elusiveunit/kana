/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Body } from '../../stories/helpers';
import RichText from '../RichText';
import Wrap from '../Wrap';

const content = (
  <div>
    <p>
      PrimaryDolorum facilis et deleniti nobis exercitationem perferendis autem
      sequi eius.
    </p>
    <p>Maiores omnis magnam dolores ipsum ea. Blanditiis nostrum quidem.</p>
    <ul>
      <li>Voluptatem rerum aut.</li>
      <li>Sed nam quo ut.</li>
    </ul>
    <h2>Heading 2</h2>
    <p>
      Iusto ipsum sed sed est et enim. Quibusdam fugiat voluptas facere eos.
      Amet quas qui. Adipisci quibusdam cumque. Sunt dignissimos nihil ad
      veritatis.
    </p>
    <ol>
      <li>Rem facere eum esse voluptate alias at.</li>
      <li>Quo ut et maiores laudantium omnis laudantium.</li>
    </ol>
    <h3>Heading 3</h3>
    <p>
      Officiis assumenda rerum et sit aut sunt soluta dignissimos. Facilis
      molestias quia sunt deserunt suscipit ad eum dolorem perspiciatis.
      Explicabo iusto sint et et pariatur ullam nemo.
    </p>
  </div>
);

storiesOf('RichText', module).add(
  'Default',
  withInfo('Adds proper spacing to body text for readability')(() => (
    <Body>
      <Wrap size="thin">
        <RichText>
          <h1>With RichText</h1>
          {content}
        </RichText>
        <div
          style={{
            margin: '40px 0',
            'border-top': '1px solid rgba(0, 0, 0, 0.25)',
          }}
        />
        <h1>Without RichText</h1>
        {content}
      </Wrap>
    </Body>
  )),
);
