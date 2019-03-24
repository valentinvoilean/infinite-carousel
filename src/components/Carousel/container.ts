import { compose } from 'recompose';

import { Carousel } from './Carousel';

import { withButtonHandlers } from './withButtonHandlers';
import { withMouseHandlers } from './withMouseHandlers';
import { withReduxConnect } from './withReduxConnect';
import { withSlideHandlers } from './withSlideHandlers';
import { withTouchHandlers } from './withTouchHandlers';

import { ComposedProps, OwnProps } from './types';

export const CarouselContainer = compose<ComposedProps, OwnProps>(
  withReduxConnect,
  withSlideHandlers,
  withButtonHandlers,
  withMouseHandlers,
  withTouchHandlers
)(Carousel);
