import { ReduxConnectProps } from './withReduxConnect';

export interface StyledSlidesProps {
  slidesLength: number;
  animate: boolean;
}

export type ComposedProps = ReduxConnectProps;
export type CarouselProps = ComposedProps;
