import * as React from 'react';

import { slideToNextSlide, slideToPreviousSlide } from './withButtonHandlers';

describe('withButtonHandlers', () => {
  describe('slideToNextSlide', () => {
    it('should slide to the next slide', () => {
      const props: any = {
        children: ['ssss', 'bbbb'],
        activeSlideIndex: 0,
        changeSlide: jest.fn()
      };

      const props2: any = {
        ...props,
        activeSlideIndex: 1
      };

      slideToNextSlide(props)();
      expect(props.changeSlide).toHaveBeenCalledWith(1);

      slideToNextSlide(props2)();
      expect(props.changeSlide).toHaveBeenCalledWith(2);
    });

    it('should not slide more than the length of the items + the first cloned item', () => {
      const props: any = {
        children: ['ssss', 'bbbb'],
        activeSlideIndex: 3, // here we are already on the cloned item
        changeSlide: jest.fn()
      };

      slideToNextSlide(props)();
      expect(props.changeSlide).toHaveBeenCalledWith(3);
    });
  });

  describe('slideToNextSlide', () => {
    it('should slide to the previous slide', () => {
      const props: any = {
        children: null,
        activeSlideIndex: 2,
        changeSlide: jest.fn()
      };

      slideToPreviousSlide(props)();

      expect(props.changeSlide).toHaveBeenCalledWith(1);
    });

    it('should not have negative index', () => {
      const props: any = {
        children: null,
        activeSlideIndex: 0,
        changeSlide: jest.fn()
      };

      slideToPreviousSlide(props)();

      expect(props.changeSlide).toHaveBeenCalledWith(0);
    });
  });
});
