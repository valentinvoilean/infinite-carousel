import 'normalize.css';
import 'react-placeholder/lib/reactPlaceholder.css';

// @ts-ignore
import coolImages from 'cool-images';
import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { ThemeProvider } from 'styled-components';

import { Carousel } from './components/Carousel';
import { StyledApp, StyledLink, StyledTitle } from './styled';

import { fonts } from './constants';
import { theme } from './theme';

export const App: React.FunctionComponent = () => {
  const images = coolImages.many(576, 1024, 10);

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <GoogleFontLoader fonts={fonts} />
        <StyledTitle>Infinite Carousel</StyledTitle>
        <Carousel>
          {images.map((url: string, index: number) => (
            <img src={url} key={index} alt={`img-${index}`} />
          ))}
        </Carousel>
        <StyledLink href="http://valentinvoilean.com">by Valentin-Marian Voilean</StyledLink>
      </StyledApp>
    </ThemeProvider>
  );
};
