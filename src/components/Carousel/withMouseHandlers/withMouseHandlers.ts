import * as React from 'react';

import { compose, lifecycle, withHandlers } from 'recompose';

import { SlideHandlersProps } from '../withSlideHandlers';
import { MouseHandlersInnerProps, MouseHandlersProps } from './types';

export const handleMouseDown = (props: MouseHandlersInnerProps) => (event: React.MouseEvent) => {
  const { toggleMouseDragging, setInitialXPosition } = props;
  toggleMouseDragging(true);
  setInitialXPosition(event.pageX);
};

export const handleMouseMove = (props: MouseHandlersInnerProps) => (event: React.MouseEvent) => {
  if (!props.enableDragging) {
    return;
  }

  props.handleMove(event.pageX);
};

export const withMouseHandlers = compose(
  withHandlers<MouseHandlersInnerProps, MouseHandlersProps>({
    handleMouseDown,
    handleMouseMove
  }),
  lifecycle<SlideHandlersProps, {}, {}>({
    componentDidMount(): void {
      window.addEventListener('mouseup', this.props.handleEnd);
    },
    componentWillUnmount(): void {
      window.removeEventListener('mouseup', this.props.handleEnd);
    }
  })
);
