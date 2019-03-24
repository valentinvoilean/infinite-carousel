// Describing the shape of the Carousel's slice of state
export interface CarouselState {
  activeSlideIndex: number;
  slideOffset: number;
  animate: boolean;
  interactionStartTime: number;
  initialXPosition: number;
  enableDragging: boolean;
}

// Describing the different ACTION NAMES available
export const CHANGE_SLIDE_INDEX = 'CAROUSEL::CHANGE_SLIDE_INDEX';
export const SET_INITIAL_X_POSITION = 'CAROUSEL::SET_INITIAL_X_POSITION';
export const TOGGLE_MOUSE_DRAGGING = 'CAROUSEL::TOGGLE_MOUSE_DRAGGING';
export const SET_SLIDE_OFFSET = 'CAROUSEL::SET_SLIDE_OFFSET';

interface ChangeSlideIndexAction {
  type: typeof CHANGE_SLIDE_INDEX;
  payload: {
    newSlideIndex: number;
    animate: boolean;
  };
}

interface SetInitialXPositionAction {
  type: typeof SET_INITIAL_X_POSITION;
  initialXPosition: number;
}

interface ToggleMouseDraggingAction {
  type: typeof TOGGLE_MOUSE_DRAGGING;
  enableDragging: boolean;
}

interface SetSlideOffsetAction {
  type: typeof SET_SLIDE_OFFSET;
  slideOffset: number;
}

export type CarouselActionTypes =
  | ChangeSlideIndexAction
  | SetInitialXPositionAction
  | ToggleMouseDraggingAction
  | SetSlideOffsetAction;
