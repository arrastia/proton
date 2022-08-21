import clsx from 'clsx';

import classes from './Textarea.module.css';

import type { ComponentProps } from 'react';

export interface TextareaProps extends ComponentProps<'textarea'> {}

export function Textarea({ className, ...rest }: TextareaProps) {
  return <textarea className={clsx(className, classes.root)} {...rest} />;
}
