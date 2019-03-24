import React from 'react';

import { animationTimeout } from '../../constants';
import { ChangeSlideHandlerInnerProps } from '../types';

export const changeSlide = (props: ChangeSlideHandlerInnerProps) => (
  newSlideIndex: number,
  animate: boolean = true
) => {
  const { setSlideOffset, changeSlideIndex, children } = props;
  setSlideOffset(newSlideIndex);
  changeSlideIndex(newSlideIndex, animate);

  setTimeout(() => {
    const childrenLength = React.Children.count(children);
    if (newSlideIndex === 0) {
      // the first item is a clone of the last child
      setSlideOffset(childrenLength);
      changeSlideIndex(childrenLength, false);
    } else if (newSlideIndex === childrenLength + 1) {
      // the last item is a copy of the first child
      setSlideOffset(1);
      changeSlideIndex(1, false);
    }
  }, animationTimeout);
};
