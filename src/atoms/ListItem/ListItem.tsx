import clsx from 'clsx';

import classes from './ListItem.module.css';

import type React from 'react';

interface Props extends React.ComponentPropsWithoutRef<'li'> {
  clickable?: boolean;
  dense?: boolean;
  isSelected?: boolean;
}

function ListItem({ className, clickable, dense, onClick, isSelected, ...rest }: Props) {
  const rootClassName = clsx(className, classes.root, {
    [classes.clickable]: clickable,
    [classes.dense]: dense,
    [classes.selected]: isSelected
  });

  function handleClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    onClick?.(event);
  }

  return <li className={rootClassName} onClick={handleClick} {...rest} />;
}

export default ListItem;
