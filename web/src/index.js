import 'whatwg-fetch';
import '@babel/polyfill';

import './utils/polyfills';

import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';
import { Message } from './utils/message';
import theme from './utils/theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Root />
    <Message />
  </MuiThemeProvider>,
  document.getElementById('app'),
);
