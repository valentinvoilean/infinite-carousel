import * as React from 'react';
import { ReduxConnectProps } from '../withReduxConnect';
import { SlideHandlersProps } from '../withSlideHandlers';

export interface TouchHandlersProps {
  handleTouchStart: (event: React.TouchEvent) => void;
  handleTouchMove: (event: React.TouchEvent) => void;
}

export type TouchHandlersInnerProps = SlideHandlersProps & ReduxConnectProps;
