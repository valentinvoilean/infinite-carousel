import { theme } from '../../../../theme';
import { InteractSlideHandlerInnerProps } from '../types';

export const handleMove = (props: InteractSlideHandlerInnerProps) => (newXPosition: number) => {
  const { initialXPosition, activeSlideIndex, setSlideOffset } = props;
  const percentageOffset = (initialXPosition - newXPosition) / theme.gallery.width;

  setSlideOffset(activeSlideIndex + percentageOffset);
};
