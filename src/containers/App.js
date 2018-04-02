/**
 * @flow
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  DEFAULT_SETTINGS,
  FONT_SANS,
  FONT_SERIF,
  SETTINGS_KEY_FONT,
  SETTINGS_KEY_KANJI,
  SETTINGS_KEY_THEME,
  THEME_DARK,
  THEME_LIGHT,
} from '../constants/app';
import { getSettings, saveSettings } from '../utils/settings';
import { assign } from '../utils/object';
import { light as lightTheme, dark as darkTheme } from '../style/theme';
import AppPage from '../components/AppPage';
import Header from '../components/Header';
import KanaReference from '../components/KanaReference';
import Overlay from '../components/Overlay';
import Quiz from './Quiz';

import type { Settings } from '../types';

const THEME_MAP = {
  [THEME_LIGHT]: lightTheme,
  [THEME_DARK]: darkTheme,
};

type Props = {};
type State = {
  settings: Settings,
  isReferenceVisible: boolean,
};

export default class App extends React.Component<Props, State> {
  state = {
    settings: getSettings(),
    isReferenceVisible: false,
  };

  toggleSetting = (key: string, on: string, off: string) => {
    let newSettings;
    this.setState(
      (state) => {
        const val = state.settings[key] === off ? on : off;
        newSettings = assign(state.settings, {
          [key]: val,
        });
        return { settings: newSettings };
      },
      () => {
        saveSettings(newSettings);
      },
    );
  };

  handleFontChange = () => {
    this.toggleSetting(SETTINGS_KEY_FONT, FONT_SANS, FONT_SERIF);
  };

  handleKanjiChange = () => {
    this.toggleSetting(SETTINGS_KEY_KANJI, true, false);
  };

  handleReferencePress = () => {
    this.setState((state) => ({
      isReferenceVisible: !state.isReferenceVisible,
    }));
  };

  handleReferenceClose = () => {
    this.setState({ isReferenceVisible: false });
  };

  handleThemeChange = () => {
    this.toggleSetting(SETTINGS_KEY_THEME, THEME_DARK, THEME_LIGHT);
  };

  render() {
    const { font, kanji, theme } = this.state.settings;
    const currentTheme =
      THEME_MAP[theme] || DEFAULT_SETTINGS[SETTINGS_KEY_THEME];
    const header = (
      <Header
        onFontChange={this.handleFontChange}
        onKanjiChange={this.handleKanjiChange}
        onReferencePress={this.handleReferencePress}
        onThemeChange={this.handleThemeChange}
        isDarkTheme={theme === THEME_DARK}
        isSansSerif={font === FONT_SANS}
        showKanji={kanji}
      />
    );
    const quiz = <Quiz kanaFont={font} showKanji={kanji} />;
    const reference = (
      <Overlay
        onClosePress={this.handleReferenceClose}
        isVisible={this.state.isReferenceVisible}
      >
        <KanaReference kanaFont={font} />
      </Overlay>
    );

    return (
      <ThemeProvider theme={currentTheme}>
        <AppPage header={header} bodyContent={quiz} extraContent={reference} />
      </ThemeProvider>
    );
  }
}
App.displayName = 'containers/App';
