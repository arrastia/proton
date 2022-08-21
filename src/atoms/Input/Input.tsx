import clsx from 'clsx';

import classes from './Input.module.css';

import type React from 'react';

interface Props extends React.ComponentProps<'input'> {}

function Input({ className, ...rest }: Props) {
  return <input className={clsx(className, classes.root)} {...rest} />;
}

export default Input;
