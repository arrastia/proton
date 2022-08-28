import type { MouseEvent } from 'react';

export type VisibilityIconProps = {
  onClick?: (event?: MouseEvent<HTMLDivElement>) => void;
  size: number;
};
