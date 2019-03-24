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

import { CarouselProps } from './types';

import { getCounterIndex } from './utils';

export const Carousel: React.FunctionComponent<CarouselProps> = ({
  children,
  slideOffset,
  slideToPreviousSlide,
  slideToNextSlide,
  handleEnd,
  handleMouseDown,
  handleMouseMove,
  handleTouchStart,
  handleTouchMove,
  animate
}) => {
  const childrenList = React.Children.toArray(children);
  const childrenLength = childrenList.length;
  const counterIndex = getCounterIndex(slideOffset, childrenLength);
  const slidesStyles = {
    transform: `translate3d(-${(100 / (childrenLength + 2)) * slideOffset}%, 0, 0)`
  };

  return (
    <StyledCarousel>
      <StyledInnerContent
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        <StyledSlides slidesLength={childrenLength + 2} style={slidesStyles} animate={animate}>
          <StyledSlide>{childrenList[childrenLength - 1]}</StyledSlide>
          {childrenList.map((slide, index) => (
            <StyledSlide key={`slide-${index}`}>{slide}</StyledSlide>
          ))}
          <StyledSlide>{childrenList[0]}</StyledSlide>
        </StyledSlides>
      </StyledInnerContent>
      <StyledPreviousButton onClick={slideToPreviousSlide} />
      <StyledNextButton onClick={slideToNextSlide} />
      <StyledCounter>
        {counterIndex}/{childrenLength}
      </StyledCounter>
    </StyledCarousel>
  );
};
