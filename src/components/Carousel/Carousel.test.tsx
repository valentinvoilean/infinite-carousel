import React from 'react';
import renderer from 'react-test-renderer';

import 'jest-styled-components';

import { StoreAndThemeProvider } from '../StoreAndThemeProvider';
import { CarouselContainer as Carousel } from './container';

describe('Carousel', () => {
  it('renders without crashing', () => {
    const header = renderer
      .create(
        <StoreAndThemeProvider>
          <Carousel />
        </StoreAndThemeProvider>
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });
});
