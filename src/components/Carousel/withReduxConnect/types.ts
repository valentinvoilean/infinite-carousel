import {
  changeSlideIndex,
  setInitialXPosition,
  setSlideOffset,
  toggleMouseDragging
} from '../../../store/carousel/actions';
import { CarouselState } from '../../../store/carousel/types';

export type StateProps = CarouselState;

export interface DispatchProps {
  changeSlideIndex: typeof changeSlideIndex;
  setInitialXPosition: typeof setInitialXPosition;
  toggleMouseDragging: typeof toggleMouseDragging;
  setSlideOffset: typeof setSlideOffset;
}

export type ReduxConnectProps = StateProps & DispatchProps;
