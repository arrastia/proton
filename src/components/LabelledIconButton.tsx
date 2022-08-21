import clsx from 'clsx';

import classes from './LabelledIconButton.module.css';

import { Button } from '../atoms/Button/Button';

import type { ButtonProps } from 'atoms/Button';
import type { ReactNode } from 'react';

interface LabelledIconButtonProps extends ButtonProps {
  label: string;
  icon: ReactNode;
  className?: string;
}

function LabelledIconButton({ label, icon, className, ...rest }: LabelledIconButtonProps) {
  return (
    <Button className={clsx(classes.container, className)} {...rest}>
      <span className={classes.icon}>{icon}</span>
      {label}
    </Button>
  );
}

export default LabelledIconButton;
