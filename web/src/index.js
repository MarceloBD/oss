import './utils/polyfills';

import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';
import theme from './utils/theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Root />
  </MuiThemeProvider>,
  document.getElementById('app'),
);
