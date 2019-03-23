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

import { CarouselState } from './types';

export class Carousel extends React.PureComponent<{}, CarouselState> {
  public state = {
    activeSlideIndex: 0
  };

  public render(): React.ReactNode {
    const { children } = this.props;
    const { activeSlideIndex } = this.state;
    const childrenList = React.Children.toArray(children);
    const childrenLength = childrenList.length;
    const slidesStyles = {
      transform: `translate3d(-${(100 / childrenLength) * activeSlideIndex}%, 0, 0)`
    };

    return (
      <StyledCarousel>
        <StyledInnerContent>
          <StyledSlides slidesLength={childrenLength} style={slidesStyles}>
            {childrenList.map((slide, index) => (
              <StyledSlide key={`slide-${index}`}>{slide}</StyledSlide>
            ))}
          </StyledSlides>
        </StyledInnerContent>
        <StyledPreviousButton onClick={this.slideToPreviousSlide} />
        <StyledNextButton onClick={this.slideToNextSlide} />
        <StyledCounter>
          {activeSlideIndex}/{childrenLength}
        </StyledCounter>
      </StyledCarousel>
    );
  }

  private readonly changeSlide = (activeSlideIndex: number) => {
    this.setState({
      activeSlideIndex
    });
  };

  private readonly slideToNextSlide = () => {
    const childrenLength = React.Children.count(this.props.children);
    const { activeSlideIndex } = this.state;
    const newIndex = Math.min(activeSlideIndex + 1, childrenLength - 1);
    this.changeSlide(newIndex);
  };

  private readonly slideToPreviousSlide = () => {
    const newIndex = Math.max(this.state.activeSlideIndex - 1, 0);
    this.changeSlide(newIndex);
  };
}
