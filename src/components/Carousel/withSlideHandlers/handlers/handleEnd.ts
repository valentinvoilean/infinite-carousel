import { InteractSlideHandlerInnerProps } from '../types';

export const handleEnd = (props: InteractSlideHandlerInnerProps) => () => {
  const { activeSlideIndex, interactionStartTime, slideOffset, changeSlide } = props;
  const timeElapsed = Date.now() - interactionStartTime;
  const velocity = Math.abs((slideOffset / timeElapsed) * 10000);
  let newIndex = Math.round(slideOffset);

  if (velocity > 60 && slideOffset !== activeSlideIndex) {
    newIndex = slideOffset < activeSlideIndex ? activeSlideIndex - 1 : activeSlideIndex + 1;
  }

  changeSlide(newIndex);
};
