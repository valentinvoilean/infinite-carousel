import 'normalize.css';
import 'react-placeholder/lib/reactPlaceholder.css';

import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { ThemeProvider } from 'styled-components';

import { Carousel } from './components/Carousel';
import { StyledApp, StyledLink, StyledTitle } from './styled';

import { fonts } from './constants';
import { theme } from './theme';

export const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <StyledApp>
      <GoogleFontLoader fonts={fonts} />
      <StyledTitle>Infinite Carousel</StyledTitle>
      <Carousel />
      <StyledLink href="http://valentinvoilean.com">by Valentin-Marian Voilean</StyledLink>
    </StyledApp>
  </ThemeProvider>
);
