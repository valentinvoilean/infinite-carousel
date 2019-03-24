import * as React from 'react';
import { withHandlers } from 'recompose';

import { TouchHandlersInnerProps, TouchHandlersProps } from './types';

export const handleTouchStart = (props: TouchHandlersInnerProps) => (event: React.TouchEvent) => {
  props.setInitialXPosition(event.touches[0].pageX);
};

export const handleTouchMove = (props: TouchHandlersInnerProps) => (event: React.TouchEvent) => {
  props.handleMove(event.touches[0].pageX);
};

export const withTouchHandlers = withHandlers<TouchHandlersInnerProps, TouchHandlersProps>({
  handleTouchStart,
  handleTouchMove
});
