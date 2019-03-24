import { ButtonHandlersProps } from './withButtonHandlers';
import { ReduxConnectProps } from './withReduxConnect';
import { SlideHandlersProps } from './withSlideHandlers';

export interface StyledSlidesProps {
  slidesLength: number;
  animate: boolean;
}

export type ComposedProps = ReduxConnectProps & SlideHandlersProps & ButtonHandlersProps;
export type CarouselProps = ComposedProps;
