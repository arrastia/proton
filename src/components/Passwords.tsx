import clsx from 'clsx';

import classes from './Passwords.module.css';

import { List } from 'atoms/List';
import PasswordListItem from './PasswordListItem';

import type { Password } from '../models';

interface Props {
  editing: boolean;
  passwords: { [key: string]: Password };
  onSelectPassword: (id: string) => void;
}

function Passwords({ editing, passwords, onSelectPassword }: Props) {
  function renderListItem(password: Password) {
    function handleClick() {
      onSelectPassword(password.id);
    }

    return (
      <PasswordListItem disabled={editing} key={password.name} name={password.name} onClick={handleClick} vulnerable={password.value.length < 2} />
    );
  }

  return <List className={clsx(classes.passwords, { [classes.disabled]: editing })}>{Object.values(passwords).map(renderListItem)}</List>;
}

export default Passwords;
