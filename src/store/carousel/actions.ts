import { CHANGE_SLIDE, SET_INITIAL_X_POSITION, TOGGLE_MOUSE_DRAGGING } from './types';

export const changeSlide = (newSlideIndex: number, animate: boolean = true) => ({
  type: CHANGE_SLIDE,
  payload: { newSlideIndex, animate }
});

export const setInitialXPosition = (initialXPosition: number) => ({
  type: SET_INITIAL_X_POSITION,
  initialXPosition
});

export const toggleMouseDragging = (enableDragging: boolean) => ({
  type: typeof TOGGLE_MOUSE_DRAGGING,
  enableDragging
});
