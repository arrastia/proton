import { useRecoilState } from 'recoil';

import Input from 'atoms/Input';
import Labelled from 'atoms/Labelled';

import { passwordElementState } from 'stores/PasswrodElementState';

import type { ChangeEvent } from 'react';

export const FormInputElement = ({ element, id }: { id: string; element: string }) => {
  const [value, setValue] = useRecoilState(passwordElementState(`${element}_${id}`));

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setValue(value);

  return (
    <Labelled label={element}>
      <Input name={element} onChange={handleChange} value={value} />
    </Labelled>
  );
};
