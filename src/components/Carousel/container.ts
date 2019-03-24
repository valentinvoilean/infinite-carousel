import { compose } from 'recompose';

import { Carousel } from './Carousel';

import { withButtonHandlers } from './withButtonHandlers';
import { withMouseHandlers } from './withMouseHandlers';
import { withReduxConnect } from './withReduxConnect';
import { withSlideHandlers } from './withSlideHandlers';
import { withTouchHandlers } from './withTouchHandlers';

import { ComposedProps } from './types';

export const CarouselContainer = compose<ComposedProps, {}>(
  withReduxConnect,
  withSlideHandlers,
  withButtonHandlers,
  withMouseHandlers,
  withTouchHandlers
)(Carousel);
