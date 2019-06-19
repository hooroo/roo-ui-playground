import 'normalize.css/normalize.css';
import '@roo-ui/fonts/ciutadella.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@roo-ui/themes';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
