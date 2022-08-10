import clsx from 'clsx';

import classes from './Header.module.css';

import type React from 'react';

export type HeaderProps = React.ComponentPropsWithoutRef<'header'>;

function Header({ className, ...rest }: HeaderProps) {
  const rootClassName = clsx(classes.root, className);

  return <header className={rootClassName} {...rest} />;
}

export default Header;
