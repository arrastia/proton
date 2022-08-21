import { useRecoilValue } from 'recoil';

import { Styles } from './Dashboard.styles';

import { allPasswordsState } from 'stores/PasswordStore';
import { PassList } from './PassList/PassList';

export const Dashboard = () => {
  const passwords = useRecoilValue(allPasswordsState);

  return (
    <Styles.View>
      {passwords.map(({ id, name, username }) => (
        <PassList key={id} id={id} name={name} username={username} />
      ))}
    </Styles.View>
  );
};
