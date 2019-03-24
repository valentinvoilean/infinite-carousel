import 'normalize.css';
import 'react-placeholder/lib/reactPlaceholder.css';

import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { ThemeProvider } from 'styled-components';

import { Carousel } from './components/Carousel';
import { StyledApp, StyledLink, StyledTitle } from './styled';

import { fonts } from './constants';
import { theme } from './theme';

export const App: React.FunctionComponent = () => {
  const images = [
    'http://lorempixel.com/1024/576/abstract',
    'http://lorempixel.com/1024/576/city',
    'http://lorempixel.com/1024/576/people',
    'http://lorempixel.com/1024/576/transport',
    'http://lorempixel.com/1024/576/animals',
    'http://lorempixel.com/1024/576/food',
    'http://lorempixel.com/1024/576/nature',
    'http://lorempixel.com/1024/576/business',
    'http://lorempixel.com/1024/576/nightlife',
    'http://lorempixel.com/1024/576/sports'
  ];

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
