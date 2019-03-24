import * as actions from '../actions';
import * as types from '../types';

describe('carousel actions', () => {
  it('should change the slide index', () => {
    const expectedAction = {
      type: types.CHANGE_SLIDE_INDEX,
      payload: {
        newSlideIndex: 2,
        animate: true
      }
    };
    const expectedAction2 = {
      type: types.CHANGE_SLIDE_INDEX,
      payload: {
        newSlideIndex: 3,
        animate: false
      }
    };

    expect(actions.changeSlideIndex(2)).toEqual(expectedAction);
    expect(actions.changeSlideIndex(2, true)).toEqual(expectedAction);
    expect(actions.changeSlideIndex(3, false)).toEqual(expectedAction2);
  });

  it('should set initial x position', () => {
    const expectedAction = {
      type: types.SET_INITIAL_X_POSITION,
      initialXPosition: 55
    };

    expect(actions.setInitialXPosition(55)).toEqual(expectedAction);
  });

  it('should activate/deactivate mouse dragging', () => {
    const expectedAction = {
      type: types.TOGGLE_MOUSE_DRAGGING,
      enableDragging: true
    };

    const expectedAction2 = {
      type: types.TOGGLE_MOUSE_DRAGGING,
      enableDragging: false
    };

    expect(actions.toggleMouseDragging(true)).toEqual(expectedAction);
    expect(actions.toggleMouseDragging(false)).toEqual(expectedAction2);
  });

  it('should set the slide offset', () => {
    const expectedAction = {
      type: types.SET_SLIDE_OFFSET,
      slideOffset: 2.44
    };

    expect(actions.setSlideOffset(2.44)).toEqual(expectedAction);
  });
});
