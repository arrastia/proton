import clsx from 'clsx';

import classes from './List.module.css';

import type React from 'react';

export type ListProps = React.ComponentPropsWithoutRef<'ul'>;

export function List({ className, ...rest }: ListProps) {
  return <ul className={clsx(className, classes.root)} {...rest} />;
}
