import Labelled from 'atoms/Labelled';
import TextArea from 'atoms/TextArea';
import { useRecoilState } from 'recoil';

import { passwordsState } from 'stores/PasswordStore';

type Props = {
  id: string;
};

export const PasswordDescription = ({ id }: Props) => {
  const [{ description }, setPassword] = useRecoilState(passwordsState(id));

  return (
    <Labelled label="description">
      <TextArea name="description" onChange={({ target: { value } }) => setPassword(prev => ({ ...prev, description: value }))} value={description} />
    </Labelled>
  );
};
