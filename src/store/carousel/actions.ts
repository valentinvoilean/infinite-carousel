import { CHANGE_SLIDE_INDEX, SET_INITIAL_X_POSITION, SET_SLIDE_OFFSET, TOGGLE_MOUSE_DRAGGING } from './types';

export const changeSlideIndex = (newSlideIndex: number, animate: boolean = true) => ({
  type: CHANGE_SLIDE_INDEX,
  payload: { newSlideIndex, animate }
});

export const setInitialXPosition = (initialXPosition: number) => ({
  type: SET_INITIAL_X_POSITION,
  initialXPosition
});

export const toggleMouseDragging = (enableDragging: boolean) => ({
  type: TOGGLE_MOUSE_DRAGGING,
  enableDragging
});

export const setSlideOffset = (slideOffset: number) => ({
  type: SET_SLIDE_OFFSET,
  slideOffset
});
