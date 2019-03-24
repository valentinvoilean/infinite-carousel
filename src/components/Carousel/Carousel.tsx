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

export class Carousel extends React.PureComponent<CarouselProps> {
  private readonly innerContent: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

  public componentDidMount(): void {
    window.addEventListener('mouseup', this.props.handleEnd);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('mouseup', this.props.handleEnd);
  }

  public render(): React.ReactNode {
    const { children, slideOffset, slideToPreviousSlide, slideToNextSlide, handleEnd } = this.props;
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
          onTouchEnd={handleEnd}
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
        <StyledPreviousButton onClick={slideToPreviousSlide} />
        <StyledNextButton onClick={slideToNextSlide} />
        <StyledCounter>
          {counterIndex}/{childrenLength}
        </StyledCounter>
      </StyledCarousel>
    );
  }

  private readonly handleMouseDown = (event: React.MouseEvent) => {
    const { toggleMouseDragging, setInitialXPosition } = this.props;
    toggleMouseDragging(true);
    setInitialXPosition(event.pageX);
  };

  private readonly handleMouseMove = (event: React.MouseEvent) => {
    if (!this.props.enableDragging) {
      return;
    }

    this.props.handleMove(event.pageX);
  };

  private readonly handleTouchStart = (event: React.TouchEvent) => {
    this.props.setInitialXPosition(event.touches[0].pageX);
  };

  private readonly handleTouchMove = (event: React.TouchEvent) => {
    this.props.handleMove(event.touches[0].pageX);
  };
}
