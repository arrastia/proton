import { useRecoilState } from 'recoil';

import { Styles } from './PasswordName.styles';

import { passwordElementState } from 'stores/PasswordElementState';

import type { ChangeEvent } from 'react';

type Props = {
  id: string;
};

export const PasswordName = ({ id }: Props) => {
  const [value, setValue] = useRecoilState(passwordElementState(`name_${id}`));

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  return <Styles.Name autoFocus={true} onChange={handleChange} placeholder="📝 Edit passwords name" value={value} />;
};
