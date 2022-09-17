import classes from './Password.module.css';

import Icon from 'atoms/Icon';
import ListItem from 'atoms/ListItem';

import type { Password as TP } from 'models';

interface PasswordProps extends TP {
  isVulnerable: boolean;
}

export const Password = ({ name, isVulnerable }: PasswordProps) => {
  return (
    <ListItem className={classes.listItem} isClickable={true}>
      {name}
      {isVulnerable && <Icon className="fas fa-exclamation-triangle" size="small" />}
    </ListItem>
  );
};
