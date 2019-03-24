import * as React from 'react';
import { ReduxConnectProps } from '../withReduxConnect';
import { SlideHandlersProps } from '../withSlideHandlers';

export interface MouseHandlersProps {
  handleMouseDown: (event: React.MouseEvent) => void;
  handleMouseMove: (event: React.MouseEvent) => void;
}

export type MouseHandlersInnerProps = SlideHandlersProps & ReduxConnectProps;
