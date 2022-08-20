import { useRecoilState } from 'recoil';

import { passwordsState } from 'stores/PasswordStore';

type Props = {
  id: string;
};

export const PasswordTitle = ({ id }: Props) => {
  const [{ name }, setPassword] = useRecoilState(passwordsState(id));

  return <input onChange={({ target: { value } }) => setPassword(prev => ({ ...prev, name: value }))} value={name} />;
};
