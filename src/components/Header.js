/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { media } from '../style/mixins';
import { WORD_SOURCES } from '../utils/word';
import HeaderDropdown from './HeaderDropdown';
import HeaderLink from './HeaderLink';
import Kbd from './Kbd';
import Quoted from './Quoted';
import GitHubIcon from './icon/GitHub';

const StyledHeader = styled.header`
  display: flex;
  background: ${(props) => props.theme.headerBackgroundColor};
  color: #fff;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;
const RightContainer = styled.div`
  display: flex;
`;
const SettingsContainer = styled.div`
  padding: 10px 0;
`;
const AboutContainer = styled.div`
  ${media.small`
    font-size: ${em('14px')};
  `};
`;
const SettingsLabel = styled.label`
  display: block;
  padding: 10px 20px;
  white-space: nowrap;

  &:hover {
    background: ${(props) => props.theme.headerBackgroundHighlightLevel2};
  }
`;
const SettingsLabelText = styled.span`
  margin-left: 10px;
`;

type Props = {
  onThemeChange: () => void,
  onKanjiChange: () => void,
  onFontChange: () => void,
  isDarkTheme: boolean,
  isSansSerif: boolean,
  showKanji: boolean,
};

export default function Header(props: Props) {
  return (
    <StyledHeader {...props}>
      <LeftContainer>
        <HeaderDropdown text="About" dialogWidth={500}>
          <AboutContainer>
            <h2>Kana reader</h2>
            <p>
              Practice your kana skills by writing the romaji equivalent of the
              kana. The answer is checked with the{' '}
              <a href="https://github.com/WaniKani/WanaKana">WanaKana</a>{' '}
              library which uses{' '}
              <a href="https://en.wikipedia.org/wiki/Hepburn_romanization">
                Hepburn romanization
              </a>{' '}
              with the traditional way of double letters for long vowels, rather
              than using macrons (oneesan, not onēsan).
            </p>
            <p>
              Some words may have punctuation or multiple versions. In those
              cases the <Quoted>extras</Quoted> can be written as-is or left
              out, e.g. the answer for <Quoted nobr>~です</Quoted> can be{' '}
              <Quoted nobr>~desu</Quoted> or <Quoted>desu</Quoted> and the
              answer for <Quoted nobr>いい or よい</Quoted> can be{' '}
              <Quoted nobr>ii or yoi</Quoted> or just <Quoted>iiyoi</Quoted>.
            </p>
            <h3>Keyboard shortcuts</h3>
            <p>
              When the text field is focused the following keyboard shortcuts
              can be used instead of pressing the buttons:
            </p>
            <ul>
              <li>
                <Kbd type="dark">Enter</Kbd> to check the answer and advance.
              </li>
              <li>
                <Kbd type="dark">Control</Kbd>/<Kbd type="dark">Command ⌘</Kbd>{' '}
                + <Kbd type="dark">Enter</Kbd> to show the answer.
              </li>
              <li>
                <Kbd type="dark">Esc</Kbd> to skip to the next word.
              </li>
            </ul>
            <h3>Credits</h3>
            <ul>
              <li>
                Icons from <a href="https://icomoon.io/">IcoMoon</a> licensed
                under{' '}
                <a href="https://creativecommons.org/licenses/by/4.0/">
                  CC BY 4.0
                </a>
              </li>
              {WORD_SOURCES.map((source) => {
                // Prettier weirdness workaround
                const link = <a href={source.url}>{source.title}</a>;
                return (
                  <li key={source.name}>
                    Words from {source.name} ({link})
                  </li>
                );
              })}
            </ul>
            <p>
              The lists of words have been filtered and/or adjusted slightly,
              but otherwise not checked for correctness regarding things like
              kanji and translations.
            </p>
          </AboutContainer>
        </HeaderDropdown>
        <HeaderDropdown text="Settings" isPadded={false}>
          <SettingsContainer>
            <SettingsLabel for="theme">
              <input
                id="theme"
                type="checkbox"
                checked={props.isDarkTheme}
                onChange={props.onThemeChange}
              />
              <SettingsLabelText>Use dark theme</SettingsLabelText>
            </SettingsLabel>
            <SettingsLabel for="font">
              <input
                id="font"
                type="checkbox"
                checked={props.isSansSerif}
                onChange={props.onFontChange}
              />
              <SettingsLabelText>Use sans-serif font</SettingsLabelText>
            </SettingsLabel>
            <SettingsLabel for="kanji">
              <input
                id="kanji"
                type="checkbox"
                checked={props.showKanji}
                onChange={props.onKanjiChange}
              />
              <SettingsLabelText>Show kanji when available</SettingsLabelText>
            </SettingsLabel>
          </SettingsContainer>
        </HeaderDropdown>
      </LeftContainer>
      <RightContainer>
        <HeaderLink
          text="Github"
          href="https://elusiveunit.github.io/kana"
          hasVisibleText={false}
        >
          <GitHubIcon />
        </HeaderLink>
      </RightContainer>
    </StyledHeader>
  );
}
Header.displayName = 'components/Header';
