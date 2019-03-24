import { carouselReducer, initialState } from '../reducer';
import * as types from '../types';

describe('Carousel reducer', () => {
  it('should return the initial state', () => {
    expect(carouselReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should update the slide index', () => {
    expect(
      carouselReducer(initialState, {
        type: types.CHANGE_SLIDE_INDEX,
        payload: {
          animate: false,
          newSlideIndex: 2
        }
      })
    ).toEqual({
      ...initialState,
      animate: false,
      activeSlideIndex: 2
    });
  });

  it('should enable/disable mouse dragging', () => {
    expect(
      carouselReducer(initialState, {
        type: types.TOGGLE_MOUSE_DRAGGING,
        enableDragging: true
      })
    ).toEqual({
      ...initialState,
      enableDragging: true
    });
  });

  it('should set initial x position, interactionStartTime, and disable animation', () => {
    jest.spyOn(Date, 'now').mockImplementation(() => 1479427200000);

    expect(
      carouselReducer(initialState, {
        type: types.SET_INITIAL_X_POSITION,
        initialXPosition: 3
      })
    ).toEqual({
      ...initialState,
      initialXPosition: 3,
      animate: false,
      interactionStartTime: 1479427200000
    });
  });

  it('should set slide offset', () => {
    expect(
      carouselReducer(initialState, {
        type: types.SET_SLIDE_OFFSET,
        slideOffset: 2.22
      })
    ).toEqual({
      ...initialState,
      slideOffset: 2.22
    });
  });
});
