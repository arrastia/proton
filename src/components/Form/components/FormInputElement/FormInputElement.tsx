import { useRecoilState } from 'recoil';

import Input from 'atoms/Input';
import { Labelled } from 'atoms/Labelled';

import { passwordElementState } from 'stores/PasswordElementState';

import type { ChangeEvent } from 'react';
import type { Password } from 'models';

type PasswordElement = Pick<Password, 'description' | 'name' | 'username' | 'value'>;

export const FormInputElement = ({ element, id }: { id: string; element: keyof PasswordElement }) => {
  const [value, setValue] = useRecoilState(passwordElementState(`${element}_${id}`));

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setValue(value);

  return (
    <Labelled label={element}>
      <Input name={element} onChange={handleChange} value={value} />
    </Labelled>
  );
};
