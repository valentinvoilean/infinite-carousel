import { compose, withHandlers } from 'recompose';

import {
  ChangeSlideHandlerInnerProps,
  ChangeSlideHandlerProps,
  InteractSlideHandlerInnerProps,
  InteractSlideHandlerProps
} from './types';

import { changeSlide, handleEnd, handleMove } from './handlers';

export const withSlideHandlers = compose(
  withHandlers<ChangeSlideHandlerInnerProps, ChangeSlideHandlerProps>({
    changeSlide
  }),
  withHandlers<InteractSlideHandlerInnerProps, InteractSlideHandlerProps>({
    handleMove,
    handleEnd
  })
);
