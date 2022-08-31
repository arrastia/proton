import type { ComponentPropsWithoutRef } from 'react';

export type ButtonAppearance = 'primary' | 'secondary' | 'default' | 'light' | 'solid';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  appearance?: ButtonAppearance;
  isLoading?: boolean;
}
