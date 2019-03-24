// Describing the shape of the Carousel's slice of state
export interface CarouselState {
  activeSlideIndex: number;
  animate: boolean;
  interactionStartTime: Date;
  initialXPosition: number;
  enableDragging: boolean;
}

// Describing the different ACTION NAMES available
export const CHANGE_SLIDE = 'CAROUSEL::CHANGE_SLIDE';
export const SET_INITIAL_X_POSITION = 'CAROUSEL::SET_INITIAL_X_POSITION';
export const TOGGLE_MOUSE_DRAGGING = 'CAROUSEL::TOGGLE_MOUSE_DRAGGING';

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

export type CarouselActionTypes = ChangeSlideAction | SetInitialXPositionAction | ToggleMouseDraggingAction;
