import type { ComponentPropsWithoutRef } from 'react';

export type ButtonAppearance = 'default' | 'gradient' | 'primary' | 'secondary';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  appearance?: ButtonAppearance;
  isLoading?: boolean;
}
