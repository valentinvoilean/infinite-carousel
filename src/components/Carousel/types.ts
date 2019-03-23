export interface StyledSlidesProps {
  slidesLength: number;
  animate: boolean;
}

export interface CarouselState {
  activeSlideIndex: number;
  slideOffset: number;
  animate: boolean;
  interactionStartTime: Date;
  initialXPosition: number;
}
