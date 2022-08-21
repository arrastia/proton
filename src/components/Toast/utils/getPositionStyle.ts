import { prefersReducedMotion } from 'utils/AnimationUtils';

import type { CSSProperties } from 'react';
import type { ToastPosition } from '../@types/Toast.types';

const getHorizontalStyle = (position: ToastPosition): CSSProperties => {
  if (position.includes('center')) return { justifyContent: 'center' };

  return position.includes('right') ? { justifyContent: 'flex-end' } : {};
};

const getVerticalStyle = (position: ToastPosition): CSSProperties => (position.includes('top') ? { top: 0 } : { bottom: 0 });

export const getPositionStyle = (position: ToastPosition, offset: number): CSSProperties => {
  const horizontalStyle = getHorizontalStyle(position);
  const verticalStyle = getVerticalStyle(position);

  return {
    left: 0,
    right: 0,
    display: 'flex',
    position: 'absolute',
    transition: prefersReducedMotion() ? undefined : `all 230ms cubic-bezier(.21,1.02,.73,1)`,
    transform: `translateY(${offset * (position.includes('top') ? 1 : -1)}px)`,
    ...verticalStyle,
    ...horizontalStyle
  };
};
