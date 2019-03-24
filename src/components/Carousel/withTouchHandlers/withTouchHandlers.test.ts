import { handleTouchMove, handleTouchStart } from './withTouchHandlers';

describe('withTouchHandlers', () => {
  describe('handleTouchStart', () => {
    it('should call the setInitialXPosition function', () => {
      const props: any = {
        setInitialXPosition: jest.fn()
      };

      const event: any = {
        touches: [
          {
            pageX: 100
          }
        ]
      };

      handleTouchStart(props)(event);
      expect(props.setInitialXPosition).toHaveBeenCalledWith(100);
    });
  });

  describe('handleTouchMove', () => {
    it('should call the handleMove function', () => {
      const props: any = {
        handleMove: jest.fn()
      };

      const event: any = {
        touches: [
          {
            pageX: 500
          }
        ]
      };

      handleTouchMove(props)(event);
      expect(props.handleMove).toHaveBeenCalledWith(500);
    });
  });
});
