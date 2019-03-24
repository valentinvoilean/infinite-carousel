import { compose, lifecycle, withHandlers } from 'recompose';

import { SlideHandlersProps } from '../withSlideHandlers';
import { MouseHandlersInnerProps, MouseHandlersProps } from './types';

export const withMouseHandlers = compose(
  withHandlers<MouseHandlersInnerProps, MouseHandlersProps>({
    handleMouseDown: props => event => {
      const { toggleMouseDragging, setInitialXPosition } = props;
      toggleMouseDragging(true);
      setInitialXPosition(event.pageX);
    },
    handleMouseMove: props => event => {
      if (!props.enableDragging) {
        return;
      }

      props.handleMove(event.pageX);
    }
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
