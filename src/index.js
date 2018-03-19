/**
 * @flow
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { toRomaji } from 'wanakana';

import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';

// Global styling, runs just by importing.
// eslint-disable-next-line no-unused-vars
import globalStyles from './style/global';

// Expose toRomaji for dev convenience
global.toRomaji = toRomaji;

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
