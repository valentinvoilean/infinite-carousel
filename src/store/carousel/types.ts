// Describing the shape of the Carousel's slice of state
export interface CarouselState {
  activeSlideIndex: number;
  slideOffset: number;
  animate: boolean;
  interactionStartTime: Date;
  initialXPosition: number;
  enableDragging: boolean;
}

// Describing the different ACTION NAMES available
export const CHANGE_SLIDE = 'CAROUSEL::CHANGE_SLIDE';
export const SET_INITIAL_X_POSITION = 'CAROUSEL::SET_INITIAL_X_POSITION';
export const TOGGLE_MOUSE_DRAGGING = 'CAROUSEL::TOGGLE_MOUSE_DRAGGING';
export const SET_SLIDE_OFFSET = 'CAROUSEL::SET_SLIDE_OFFSET';

interface ChangeSlideAction {
  type: typeof CHANGE_SLIDE;
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
  | ChangeSlideAction
  | SetInitialXPositionAction
  | ToggleMouseDraggingAction
  | SetSlideOffsetAction;
