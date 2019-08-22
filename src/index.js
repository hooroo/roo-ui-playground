import 'roo-ui/fonts/ciutadella.css';
import 'normalize.css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, theme } from 'roo-ui';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
