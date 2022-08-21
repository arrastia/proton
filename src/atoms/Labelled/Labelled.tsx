import classes from './Labelled.module.css';

import type React from 'react';

export interface LabelledProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
}

export function Labelled({ label, children, ...rest }: LabelledProps) {
  return (
    <div {...rest}>
      <span className={classes.label}>{label}</span>
      {children}
    </div>
  );
}
