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

import { animationTimeout } from './constants';
import { getCounterIndex } from './utils';

import { theme } from '../../theme';

export class Carousel extends React.PureComponent<CarouselProps> {
  private readonly innerContent: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

  public componentDidMount(): void {
    window.addEventListener('mouseup', this.handleEnd);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('mouseup', this.handleEnd);
  }

  public render(): React.ReactNode {
    const { children, slideOffset } = this.props;
    const { animate } = this.props;
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
          onTouchEnd={this.handleEnd}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
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
    this.props.setInitialXPosition(event.touches[0].pageX);
  };

  private readonly onMove = (newXPosition: number) => {
    const { initialXPosition, activeSlideIndex, setSlideOffset } = this.props;
    const percentageOffset = (initialXPosition - newXPosition) / theme.gallery.width;

    setSlideOffset(activeSlideIndex + percentageOffset);
  };

  private readonly handleTouchMove = (event: React.TouchEvent) => {
    this.onMove(event.touches[0].pageX);
  };

  private readonly handleMouseDown = (event: React.MouseEvent) => {
    const { toggleMouseDragging, setInitialXPosition } = this.props;
    toggleMouseDragging(true);
    setInitialXPosition(event.pageX);
  };

  private readonly handleMouseMove = (event: React.MouseEvent) => {
    if (!this.props.enableDragging) {
      return;
    }

    this.onMove(event.pageX);
  };

  private readonly handleEnd = () => {
    const { activeSlideIndex, interactionStartTime, slideOffset } = this.props;
    const timeElapsed = new Date().getTime() - interactionStartTime.getTime();
    const velocity = Math.abs((slideOffset / timeElapsed) * 10000);
    let newIndex = Math.round(slideOffset);

    if (velocity > 20 && slideOffset !== activeSlideIndex) {
      newIndex = slideOffset < activeSlideIndex ? activeSlideIndex - 1 : activeSlideIndex + 1;
    }

    this.changeSlide(newIndex);
  };

  private readonly switchSlides = (newSlideIndex: number, animate: boolean) => {
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
    this.props.setSlideOffset(newSlideIndex);
    this.props.changeSlide(newSlideIndex, animate);
    this.switchSlides(newSlideIndex, animate);
  };

  private readonly slideToNextSlide = () => {
    const { children, activeSlideIndex } = this.props;
    const childrenLength = React.Children.count(children);
    const newIndex = Math.min(activeSlideIndex + 1, childrenLength + 1);
    this.changeSlide(newIndex);
  };

  private readonly slideToPreviousSlide = () => {
    const newIndex = Math.max(this.props.activeSlideIndex - 1, 0);
    this.changeSlide(newIndex);
  };
}
