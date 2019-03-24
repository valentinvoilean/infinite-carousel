import * as React from 'react';
import { ReduxConnectProps } from '../withReduxConnect';

export interface ChangeSlideHandlerProps {
  changeSlide: (newSlideIndex: number, animate?: boolean) => void;
}

export interface ChangeSlideHandlerInnerProps extends ReduxConnectProps {
  children?: React.ReactNode;
}

export interface InteractSlideHandlerProps {
  handleMove: (newXPosition: number) => void;
  handleEnd: () => void;
}

export type InteractSlideHandlerInnerProps = ReduxConnectProps & ChangeSlideHandlerProps;

export type SlideHandlersProps = ChangeSlideHandlerProps & InteractSlideHandlerProps;
