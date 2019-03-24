import { handleMouseDown, handleMouseMove } from './withMouseHandlers';

describe('withMouseHandlers', () => {
  describe('handleMouseDown', () => {
    it('should set the initial X position and enable mouse dragging', () => {
      const props: any = {
        toggleMouseDragging: jest.fn(),
        setInitialXPosition: jest.fn()
      };

      const event: any = {
        pageX: 100
      };

      handleMouseDown(props)(event);
      expect(props.toggleMouseDragging).toHaveBeenCalledWith(true);
      expect(props.setInitialXPosition).toHaveBeenCalledWith(100);
    });
  });

  describe('handleMouseMove', () => {
    it('should call the handleMove function if dragging is enabled', () => {
      const props: any = {
        enableDragging: false,
        handleMove: jest.fn()
      };

      const props2: any = {
        enableDragging: true,
        handleMove: jest.fn()
      };

      const event: any = {
        pageX: 50
      };

      handleMouseMove(props)(event);
      expect(props.handleMove).not.toHaveBeenCalled();

      handleMouseMove(props2)(event);
      expect(props2.handleMove).toHaveBeenCalledWith(50);
    });
  });
});
