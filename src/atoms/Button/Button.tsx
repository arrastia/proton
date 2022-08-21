import clsx from 'clsx';

import classes from './Button.module.css';

import type { ComponentPropsWithoutRef } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  appearance?: 'default' | 'solid';
  color?: 'blue' | 'green' | 'light';
}

export function Button({ className, color, appearance = 'solid', ...rest }: ButtonProps) {
  const rootClassName = clsx(className, classes.root, color && classes[color], appearance && classes[appearance], {
    [classes.disabled]: rest.disabled
  });

  return <button className={rootClassName} {...rest} />;
}
