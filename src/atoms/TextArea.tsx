import clsx from 'clsx';

import classes from './Input.module.css';

import type React from 'react';

interface Props extends React.ComponentProps<'textarea'> {}

function TextArea({ className, ...rest }: Props) {
  return <textarea className={clsx(className, classes.root)} {...rest} />;
}

export default TextArea;
