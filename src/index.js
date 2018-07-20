import 'normalize.css/normalize.css';
import '@roo-ui/fonts/ciutadella.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, qantas } from '@roo-ui/themes';

ReactDOM.render(
  <ThemeProvider theme={qantas}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
