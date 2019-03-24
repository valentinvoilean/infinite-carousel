import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import configureStore from '../../store';
import { theme } from '../../theme';

export const StoreAndThemeProvider: React.FunctionComponent = ({ children }) => (
  <Provider store={configureStore()}>
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  </Provider>
);
