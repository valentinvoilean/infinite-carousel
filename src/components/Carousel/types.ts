import * as React from 'react';

import { ButtonHandlersProps } from './withButtonHandlers';
import { MouseHandlersProps } from './withMouseHandlers';
import { ReduxConnectProps } from './withReduxConnect';
import { SlideHandlersProps } from './withSlideHandlers';
import { TouchHandlersProps } from './withTouchHandlers';

export interface StyledSlidesProps {
  slidesLength: number;
  animate: boolean;
}

export interface OwnProps {
  children?: React.ReactNode;
}

export type ComposedProps = ReduxConnectProps &
  SlideHandlersProps &
  ButtonHandlersProps &
  MouseHandlersProps &
  TouchHandlersProps;

export type CarouselProps = OwnProps & ComposedProps;
