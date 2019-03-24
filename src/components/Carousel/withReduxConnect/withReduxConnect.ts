import { connect } from 'react-redux';

import { AppState } from '../../../store';
import { DispatchProps, StateProps } from './types';

import {
  changeSlideIndex,
  setInitialXPosition,
  setSlideOffset,
  toggleMouseDragging
} from '../../../store/carousel/actions';

export const withReduxConnect = connect<StateProps, DispatchProps, {}, AppState>(
  state => ({
    activeSlideIndex: state.carousel.activeSlideIndex,
    slideOffset: state.carousel.slideOffset,
    interactionStartTime: state.carousel.interactionStartTime,
    animate: state.carousel.animate,
    initialXPosition: state.carousel.initialXPosition,
    enableDragging: state.carousel.enableDragging
  }),
  {
    changeSlideIndex,
    setInitialXPosition,
    toggleMouseDragging,
    setSlideOffset
  }
);
