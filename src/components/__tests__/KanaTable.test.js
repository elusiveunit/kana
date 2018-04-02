import React from 'react';
import { mount } from 'enzyme';

import { FONT_SERIF } from '../../constants/app';
import { TYPE_HIRAGANA, TYPE_KATAKANA } from '../../constants/kana';
import { light } from '../../style/theme';
import KanaTable from '../KanaTable';

describe('KanaTable', () => {
  it('Renders without crashing', () => {
    mount(
      <div>
        <KanaTable theme={light} type={TYPE_HIRAGANA} kanaFont={FONT_SERIF} />
        <KanaTable theme={light} type={TYPE_KATAKANA} kanaFont="wrong" />
      </div>,
    );
  });
});
