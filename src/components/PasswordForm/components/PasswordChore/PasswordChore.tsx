import Input from 'atoms/Input';
import Labelled from 'atoms/Labelled';
import { useRecoilState } from 'recoil';

import { passwordsState } from 'stores/PasswordStore';

export const PasswordChore = ({ id }: { id: string }) => {
  const [{ value, username }, setPassword] = useRecoilState(passwordsState(id));

  return (
    <>
      <Labelled label={'username'}>
        <Input name={'username'} onChange={({ target: { value } }) => setPassword(prev => ({ ...prev, username: value }))} value={username} />
      </Labelled>

      <Labelled label={'password'}>
        <Input name={'password'} onChange={({ target: { value } }) => setPassword(prev => ({ ...prev, value }))} value={value} />
      </Labelled>
    </>
  );
};
