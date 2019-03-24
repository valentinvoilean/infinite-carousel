import { compose } from 'recompose';

import { Carousel } from './Carousel';

import { withButtonHandlers } from './withButtonHandlers';
import { withReduxConnect } from './withReduxConnect';
import { withSlideHandlers } from './withSlideHandlers';

import { ComposedProps } from './types';

export const CarouselContainer = compose<ComposedProps, {}>(
  withReduxConnect,
  withSlideHandlers,
  withButtonHandlers
)(Carousel);
