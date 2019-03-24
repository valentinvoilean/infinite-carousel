import { withHandlers } from 'recompose';

import { TouchHandlersInnerProps, TouchHandlersProps } from './types';

export const withTouchHandlers = withHandlers<TouchHandlersInnerProps, TouchHandlersProps>({
  handleTouchStart: props => event => {
    props.setInitialXPosition(event.touches[0].pageX);
  },
  handleTouchMove: props => event => {
    props.handleMove(event.touches[0].pageX);
  }
});
