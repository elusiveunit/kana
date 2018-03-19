import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { setDefaults as setInfoDefaults } from '@storybook/addon-info';
import { injectGlobal, ThemeProvider } from 'styled-components';

import { light as lightTheme } from '../src/style/theme';

// Global styling, runs just by importing.
// eslint-disable-next-line no-unused-vars
import globalStyles from '../src/style/global';

// Add the styled-components theme to all stories
addDecorator((story) => (
  <ThemeProvider theme={lightTheme}>{story()}</ThemeProvider>
));
injectGlobal`
  body {
    background: ${lightTheme.pageBackgroundColor};
    color: ${lightTheme.textColorMain};
  }
`;

// Set options for addon-info
setInfoDefaults({
  // Disable the header with the component name
  header: false,

  // Display info inline instead of having a toggle button
  inline: true,
});

// Find stories in __stories__ directories
const req = require.context('../src', true, /__stories__\/.+\.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
