import { handleMove } from './handleMove';

describe('withSlideHandlers', () => {
  describe('handleMove', () => {
    it('should call the setSlideOffset function', () => {
      const props: any = {
        initialXPosition: 100,
        activeSlideIndex: 0,
        setSlideOffset: jest.fn()
      };

      handleMove(props)(1);

      expect(props.setSlideOffset).toHaveBeenCalledWith(0.12375);
    });
  });
});
