import 'whatwg-fetch';
import '@babel/polyfill';

import './utils/polyfills';
import './i18n';

import React from 'react';
import ReactDOM from 'react-dom';

import theme from './utils/theme';
import Root from './root';
import { Message } from './utils/message';

const ThemeContext = React.createContext(null);

ReactDOM.render(
  <ThemeContext.Provider value={theme}>
    <Root />
    <Message />
  </ThemeContext.Provider>,
  document.getElementById('app'),
);
