import React from 'react';
import renderer from 'react-test-renderer';

import { App } from './App';

import { StoreAndThemeProvider } from './components/StoreAndThemeProvider';

describe('App', () => {
  it('renders without crashing', () => {
    const header = renderer
      .create(
        <StoreAndThemeProvider>
          <App />
        </StoreAndThemeProvider>
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });
});
