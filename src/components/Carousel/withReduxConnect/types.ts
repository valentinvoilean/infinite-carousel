import { changeSlide, setInitialXPosition, toggleMouseDragging, setSlideOffset } from '../../../store/carousel/actions';
import { CarouselState } from '../../../store/carousel/types';

export type StateProps = CarouselState;

export interface DispatchProps {
  changeSlide: typeof changeSlide;
  setInitialXPosition: typeof setInitialXPosition;
  toggleMouseDragging: typeof toggleMouseDragging;
  setSlideOffset: typeof setSlideOffset;
}

export type ReduxConnectProps = StateProps & DispatchProps;
