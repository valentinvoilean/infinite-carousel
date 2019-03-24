import React from 'react';
import { withHandlers } from 'recompose';

import { ButtonHandlersInnerProps, ButtonHandlersProps } from './types';

export const slideToNextSlide = (props: ButtonHandlersInnerProps) => () => {
  const { children, activeSlideIndex, changeSlide } = props;
  const childrenLength = React.Children.count(children);
  const newIndex = Math.min(activeSlideIndex + 1, childrenLength + 1);
  changeSlide(newIndex);
};

export const slideToPreviousSlide = (props: ButtonHandlersInnerProps) => () => {
  const { activeSlideIndex, changeSlide } = props;
  const newIndex = Math.max(activeSlideIndex - 1, 0);
  changeSlide(newIndex);
};

export const withButtonHandlers = withHandlers<ButtonHandlersInnerProps, ButtonHandlersProps>({
  slideToNextSlide,
  slideToPreviousSlide
});
