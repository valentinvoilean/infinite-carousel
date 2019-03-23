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

import { animationTimeout } from './constants';
import { getCounterIndex } from './utils';

import { theme } from '../../theme';

export class Carousel extends React.PureComponent<{}, CarouselState> {
  public state = {
    activeSlideIndex: 1,
    slideOffset: 1,
    interactionStartTime: new Date(),
    animate: true,
    initialXPosition: 0
  };

  private readonly innerContent: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

  public render(): React.ReactNode {
    const { children } = this.props;
    const { animate, slideOffset } = this.state;
    const childrenList = React.Children.toArray(children);
    const childrenLength = childrenList.length;
    const counterIndex = getCounterIndex(slideOffset, childrenLength);
    const slidesStyles = {
      transform: `translate3d(-${(100 / (childrenLength + 2)) * slideOffset}%, 0, 0)`
    };

    return (
      <StyledCarousel>
        <StyledInnerContent
          ref={this.innerContent}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >
          <StyledSlides slidesLength={childrenLength + 2} style={slidesStyles} animate={animate}>
            <StyledSlide>{childrenList[childrenLength - 1]}</StyledSlide>
            {childrenList.map((slide, index) => (
              <StyledSlide key={`slide-${index}`}>{slide}</StyledSlide>
            ))}
            <StyledSlide>{childrenList[0]}</StyledSlide>
          </StyledSlides>
        </StyledInnerContent>
        <StyledPreviousButton onClick={this.slideToPreviousSlide} />
        <StyledNextButton onClick={this.slideToNextSlide} />
        <StyledCounter>
          {counterIndex}/{childrenLength}
        </StyledCounter>
      </StyledCarousel>
    );
  }

  private readonly handleTouchStart = (event: React.TouchEvent) => {
    this.setState({
      initialXPosition: event.touches[0].pageX,
      animate: false,
      interactionStartTime: new Date()
    });
  };

  private readonly handleTouchMove = (event: React.TouchEvent) => {
    const { initialXPosition, activeSlideIndex } = this.state;
    const percentageOffset = (initialXPosition - event.touches[0].pageX) / theme.gallery.width;

    this.setState({
      slideOffset: activeSlideIndex + percentageOffset
    });
  };

  private readonly handleTouchEnd = () => {
    const { activeSlideIndex, interactionStartTime, slideOffset } = this.state;
    const timeElapsed = new Date().getTime() - interactionStartTime.getTime();
    const velocity = Math.abs((slideOffset / timeElapsed) * 10000);
    let newIndex = Math.round(slideOffset);

    if (velocity > 20 && slideOffset !== activeSlideIndex) {
      newIndex = slideOffset < activeSlideIndex ? activeSlideIndex - 1 : activeSlideIndex + 1;
    }

    this.changeSlide(newIndex);
  };

  private readonly switchSlides = (newSlideIndex: number, animate: boolean) => () => {
    if (animate) {
      setTimeout(() => {
        const childrenLength = React.Children.count(this.props.children);
        if (newSlideIndex === 0) {
          this.changeSlide(childrenLength, false);
        } else if (newSlideIndex === childrenLength + 1) {
          this.changeSlide(1, false);
        }
      }, animationTimeout);
    }
  };

  private readonly changeSlide = (newSlideIndex: number, animate: boolean = true) => {
    this.setState(
      {
        animate,
        slideOffset: newSlideIndex,
        activeSlideIndex: newSlideIndex,
        initialXPosition: 0
      },
      this.switchSlides(newSlideIndex, animate)
    );
  };

  private readonly slideToNextSlide = () => {
    const childrenLength = React.Children.count(this.props.children);
    const { activeSlideIndex } = this.state;
    const newIndex = Math.min(activeSlideIndex + 1, childrenLength + 1);
    this.changeSlide(newIndex);
  };

  private readonly slideToPreviousSlide = () => {
    const newIndex = Math.max(this.state.activeSlideIndex - 1, 0);
    this.changeSlide(newIndex);
  };
}
