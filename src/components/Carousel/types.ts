import { ButtonHandlersProps } from './withButtonHandlers';
import { MouseHandlersProps } from './withMouseHandlers';
import { ReduxConnectProps } from './withReduxConnect';
import { SlideHandlersProps } from './withSlideHandlers';

export interface StyledSlidesProps {
  slidesLength: number;
  animate: boolean;
}

export type ComposedProps = ReduxConnectProps & SlideHandlersProps & ButtonHandlersProps & MouseHandlersProps;
export type CarouselProps = ComposedProps;
