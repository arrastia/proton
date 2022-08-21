import { useRecoilValue } from 'recoil';

import classes from './Passwords.module.css';

import List from 'atoms/List';
import { Password } from './components/Password';

import { allPasswordsState } from 'stores/PasswordStore';

import type { Password as TPass } from 'models';

export const Passwords = () => {
  const passwords = useRecoilValue(allPasswordsState);

  const renderListItem = (password: TPass) => <Password key={password.id} {...password} isVulnerable={false} />;

  return <List className={classes.passwords}>{passwords.map(renderListItem)}</List>;
};
