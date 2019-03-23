import React from 'react';

import {
  StyledCarousel,
  StyledCounter,
  StyledInnerContent,
  StyledNextButton,
  StyledPreviousButton,
  StyledSlide,
  StyledSlides
} from './styled';

export const Carousel: React.FunctionComponent = props => {
  const { children } = props;
  const childrenList = React.Children.toArray(children);

  return (
    <StyledCarousel>
      <StyledInnerContent>
        <StyledSlides slidesLength={childrenList.length}>
          {childrenList.map((slide, index) => (
            <StyledSlide key={`slide-${index}`}>{slide}</StyledSlide>
          ))}
        </StyledSlides>
      </StyledInnerContent>
      <StyledPreviousButton />
      <StyledNextButton />
      <StyledCounter>[ 1/10 ]</StyledCounter>
    </StyledCarousel>
  );
};
