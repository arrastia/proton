import clsx from 'clsx';

import classes from './ListItem.module.css';

import type React from 'react';
import { Styles } from './ListItem.styles';

interface Props extends React.ComponentPropsWithoutRef<'li'> {
  isClickable?: boolean;
  dense?: boolean;
  isSelected?: boolean;
}

function ListItem({ className, isClickable, dense, onClick, isSelected, ...rest }: Props) {
  function handleClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    onClick?.(event);
  }

  return <Styles.ListItem isClickable={isClickable} isSelected={isSelected} onClick={handleClick} {...rest} />;
}

export default ListItem;
