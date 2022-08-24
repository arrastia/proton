import { useRecoilState } from 'recoil';

import { Styles } from './PasswordValue.styles';

import { passwordElementState } from 'stores/PasswordElementState';

import type { ChangeEvent } from 'react';
import { InputPassword } from 'components/InputPassword';

type Props = {
  id: string;
};

export const PasswordValue = ({ id }: Props) => {
  const [value, setValue] = useRecoilState(passwordElementState(`value_${id}`));

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  return <InputPassword onChange={handleChange} placeholder="New password" type="new-password" value={value} />;
};
