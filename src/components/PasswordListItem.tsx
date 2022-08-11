import React from 'react';
import Icon from '../atoms/Icon';

import ListItem from '../atoms/ListItem';
import classes from './PasswordListItem.module.css';

interface PasswordListItemProps {
  name: string;
  disabled: boolean;
  onClick: () => void;
  vulnerable: boolean;
}

function PasswordListItem({ name, vulnerable, ...rest }: PasswordListItemProps) {
  return (
    <ListItem className={classes.listItem} clickable {...rest}>
      {name}
      {vulnerable && <Icon className="fas fa-exclamation-triangle" size="small" />}
    </ListItem>
  );
}

export default React.memo(PasswordListItem);
