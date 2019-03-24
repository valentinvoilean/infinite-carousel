import { handleEnd } from './handleEnd';

describe('withSlideHandlers', () => {
  describe('handleEnd', () => {
    it('should call the changeSlide function', () => {
      const props: any = {
        activeSlideIndex: 0,
        interactionStartTime: Date.now(),
        slideOffset: 0,
        changeSlide: jest.fn()
      };

      handleEnd(props)();

      expect(props.changeSlide).toHaveBeenCalled();
    });

    it('should slide to the next slide', () => {
      const props: any = {
        activeSlideIndex: 1,
        interactionStartTime: Date.now() - 10000,
        slideOffset: 1.51,
        changeSlide: jest.fn()
      };

      const props2: any = {
        activeSlideIndex: 1,
        interactionStartTime: Date.now() + 10, // High velocity
        slideOffset: 1.2,
        changeSlide: jest.fn()
      };

      handleEnd(props)();

      expect(props.changeSlide).toHaveBeenCalledWith(2);

      // even if the offset doesn't pass the half size,
      // it should still switch to the second slide because of the high velocity
      handleEnd(props2)();
      expect(props.changeSlide).toHaveBeenCalledWith(2);
    });

    it('should remain to the current slide', () => {
      const props: any = {
        activeSlideIndex: 1,
        interactionStartTime: Date.now() - 10000,
        slideOffset: 1.49,
        changeSlide: jest.fn()
      };

      handleEnd(props)();

      expect(props.changeSlide).toHaveBeenCalledWith(1);
    });

    it('should slide to the previous slide', () => {
      const props: any = {
        activeSlideIndex: 1,
        interactionStartTime: Date.now() - 10000,
        slideOffset: 0.49,
        changeSlide: jest.fn()
      };

      const props2: any = {
        activeSlideIndex: 1,
        interactionStartTime: Date.now() + 10, // High velocity
        slideOffset: 0.99,
        changeSlide: jest.fn()
      };

      handleEnd(props)();

      expect(props.changeSlide).toHaveBeenCalledWith(0);

      // even if the offset doesn't pass the half size,
      // it should still switch to the first slide because of the high velocity
      handleEnd(props2)();
      expect(props.changeSlide).toHaveBeenCalledWith(0);
    });
  });
});
