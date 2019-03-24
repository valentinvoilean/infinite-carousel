import * as React from 'react';
import { ReduxConnectProps } from '../withReduxConnect';
import { ChangeSlideHandlerProps } from '../withSlideHandlers';

export interface ButtonHandlersProps {
  slideToNextSlide: () => void;
  slideToPreviousSlide: () => void;
}

export interface ButtonHandlersInnerProps extends ChangeSlideHandlerProps, ReduxConnectProps {
  children?: React.ReactNode;
}
