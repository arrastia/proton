import clsx from 'clsx';

import classes from './Input.module.css';

import type React from 'react';

interface Props extends React.ComponentProps<'input'> {
  isInvalid?: boolean;
}

function Input({ className, isInvalid, ...rest }: Props) {
  return <input className={clsx(className, classes.root, { [classes.invalid]: isInvalid })} {...rest} />;
}

export default Input;
