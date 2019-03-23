import React from 'react';

import { StyledCarousel, StyledInnerContent, StyledSlide, StyledSlides } from './styled';

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
    </StyledCarousel>
  );
};
