/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import {
  DEFAULT_SETTINGS,
  THEME_LIGHT,
  SETTINGS_KEY_FONT,
} from '../constants/app';
import {
  TYPE_HIRAGANA,
  TYPE_KATAKANA,
  HIRAGANA_KEY,
  KATAKANA_KEY,
  GOJUON,
  GOJUON_DAKUTEN,
  ROMAJI_KEY,
  YOUON,
  YOUON_DAKUTEN,
} from '../constants/kana';
import { KANA_FONT_MAP } from '../constants/style';
import { media } from '../style/mixins';
import { tableize } from '../utils/object';
import { tone } from '../utils/style';
import type { KanaType } from '../types';

const KEYS = {
  [TYPE_HIRAGANA]: HIRAGANA_KEY,
  [TYPE_KATAKANA]: KATAKANA_KEY,
};
const GOJUON_HEADERS = ['a', 'i', 'u', 'e', 'o'];
const YOUON_HEADERS = ['ya', 'yu', 'yo'];
const GOJUON_GAPS = {
  7: [1, 3],
  9: [1, 2, 3],
  10: [1, 2, 3, 4],
};
const TABLES = [
  {
    headers: GOJUON_HEADERS,
    columns: 5,
    rows: tableize(GOJUON.concat(GOJUON_DAKUTEN), 5, GOJUON_GAPS),
  },
  {
    headers: YOUON_HEADERS,
    columns: 3,
    rows: tableize(YOUON.concat(YOUON_DAKUTEN), 3),
  },
];

const Table = styled.table`
  width: 380px;
  border-spacing: 5px;
  border-collapse: separate;
  white-space: nowrap;

  & + & {
    margin-top: 20px;
  }
  ${media.small`
    width: 100%;
  `};
`;
const ColTh = styled.th`
  font-size: 13px;
  text-transform: uppercase;
`;
const RowTh = styled(ColTh)`
  width: 2em;
  padding-right: 5px;
  text-align: right;

  ${media.small`
    width: auto;
  `};
`;
const CellBase = styled.td`
  padding: 8px 12px;
  border: 1px solid ${(props) => props.theme.formFieldBorderColor};
  border-radius: ${(props) => props.theme.formControlRadius}px;
  background: ${(props) =>
    tone(
      props,
      props.theme.pageBackgroundColor,
      0.02,
      props.theme.type === THEME_LIGHT,
    )};
  line-height: 1;
  text-align: center;

  ${media.small`
    padding: 6px 0;
  `};
`;
const CellSmall = styled(CellBase)`
  ${media.small`
    width: 18%;
  `};
`;
const CellLarge = styled(CellBase)`
  ${media.small`
    width: 31%;
  `};
`;
const KanaText = styled.span`
  display: block;
  margin-bottom: 5px;
  font-family: ${(props) =>
    KANA_FONT_MAP[props.kanaFont] || DEFAULT_SETTINGS[SETTINGS_KEY_FONT]};
  font-size: 28px;

  ${media.small`
    font-size: 21px;
  `};
`;
const RomajiText = styled.span`
  font-size: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

type Props = {
  type: KanaType,
  kanaFont: string,
};

export default function KanaTable(props: Props) {
  const kanaKey = KEYS[props.type];

  return TABLES.map((block) => (
    <Table key={block.rows[0][0][kanaKey]}>
      <thead>
        <tr>
          <th />
          {block.headers.map((text) => (
            <ColTh scope="col" key={text}>
              {text}
            </ColTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {block.rows.map((row) => {
          const Cell = block.columns > 3 ? CellSmall : CellLarge;
          const rowRomaji = row[0][ROMAJI_KEY];
          const regex = rowRomaji.length > 2 ? /y?[aiueo]$/ : /[aiueo]$/;
          const rowHeader =
            rowRomaji.length > 1 ? rowRomaji.replace(regex, '') : null;

          return (
            <tr key={row[0][kanaKey]}>
              <RowTh scope="row">{rowHeader}</RowTh>
              {row.map((kana, i) => {
                if (!kana) {
                  // eslint-disable-next-line react/no-array-index-key
                  return <td key={i} />;
                }
                const romaji = kana[ROMAJI_KEY];
                const text = kana[kanaKey];

                return (
                  <Cell key={text} theme={props.theme}>
                    <KanaText kanaFont={props.kanaFont}>{text}</KanaText>
                    <RomajiText>({romaji})</RomajiText>
                  </Cell>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  ));
}
KanaTable.displayName = 'components/KanaTable';
KanaTable.defaultProps = {
  kanaFont: DEFAULT_SETTINGS[SETTINGS_KEY_FONT],
};
