import React from 'react';
import { compose, withHandlers } from 'recompose';

import { ChangeSlideHandlerInnerProps, ChangeSlideHandlerProps } from './types';

import { animationTimeout } from '../constants';

export const withSlideHandlers = compose(
  withHandlers<ChangeSlideHandlerInnerProps, ChangeSlideHandlerProps>({
    changeSlide: props => (newSlideIndex, animate = true) => {
      const { setSlideOffset, changeSlideIndex, children } = props;
      setSlideOffset(newSlideIndex);
      changeSlideIndex(newSlideIndex, animate);

      setTimeout(() => {
        const childrenLength = React.Children.count(children);
        if (newSlideIndex === 0) {
          setSlideOffset(childrenLength);
          changeSlideIndex(childrenLength, false);
        } else if (newSlideIndex === childrenLength + 1) {
          setSlideOffset(1);
          changeSlideIndex(1, false);
        }
      }, animationTimeout);
    }
  })
);
