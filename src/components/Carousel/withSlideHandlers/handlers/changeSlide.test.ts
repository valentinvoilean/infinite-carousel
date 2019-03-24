import { changeSlide } from './changeSlide';

jest.useFakeTimers();

describe('withSlideHandlers', () => {
  describe('changeSlide', () => {
    it('should set the slide offset with the given value', () => {
      const props: any = {
        setSlideOffset: jest.fn(),
        changeSlideIndex: jest.fn(),
        children: ['child1', 'child2']
      };

      changeSlide(props)(22, true);

      expect(props.setSlideOffset).toHaveBeenCalledWith(22);
    });

    it('should call the changeSlideIndex with the given values', () => {
      const props: any = {
        setSlideOffset: jest.fn(),
        changeSlideIndex: jest.fn(),
        children: ['child1', 'child2']
      };

      changeSlide(props)(22, true);
      expect(props.changeSlideIndex).toHaveBeenCalledWith(22, true);
    });

    describe('when the current index is 0 and represents the last item that was cloned', () => {
      it('should switch to the index of the last child', () => {
        const props: any = {
          setSlideOffset: jest.fn(),
          changeSlideIndex: jest.fn(),
          children: ['child1', 'child2']
        };

        changeSlide(props)(0, true);
        jest.runOnlyPendingTimers();
        expect(props.changeSlideIndex).toHaveBeenLastCalledWith(2, false);
      });
    });

    describe('when the current slide is the last one and represents the first cloned item', () => {
      it('should switch to the index of the first child', () => {
        const props: any = {
          setSlideOffset: jest.fn(),
          changeSlideIndex: jest.fn(),
          children: ['child1', 'child2']
        };

        changeSlide(props)(3, true);
        jest.runOnlyPendingTimers();
        expect(props.changeSlideIndex).toHaveBeenLastCalledWith(1, false);
      });
    });
  });
});
