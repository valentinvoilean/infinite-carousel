import 'normalize.css';
import 'react-placeholder/lib/reactPlaceholder.css';

import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { ThemeProvider } from 'styled-components';

import { fonts } from './constants';

export const App: React.FunctionComponent = () => (
  <ThemeProvider theme={{}}>
    <div>
      <GoogleFontLoader fonts={fonts} />
      <div>Hello</div>
    </div>
  </ThemeProvider>
);
