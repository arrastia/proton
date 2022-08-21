import clsx from 'clsx';

import classes from './Header.module.css';

import type { ComponentPropsWithoutRef } from 'react';

export type HeaderProps = ComponentPropsWithoutRef<'header'>;

function Header({ className, ...rest }: HeaderProps) {
  const rootClassName = clsx(classes.root, className);

  return <header className={rootClassName} {...rest} />;
}

export default Header;
