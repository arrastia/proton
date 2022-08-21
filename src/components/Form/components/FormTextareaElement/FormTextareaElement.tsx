import { useRecoilState } from 'recoil';

import Labelled from 'atoms/Labelled';
import TextArea from 'atoms/TextArea';

import { passwordElementState } from 'stores/PasswordElementState';

import type { ChangeEvent } from 'react';
import type { Password } from 'models';

type PasswordElement = Pick<Password, 'description' | 'name' | 'username' | 'value'>;

export const FormTextareaElement = ({ element, id }: { id: string; element: keyof PasswordElement }) => {
  const [value, setValue] = useRecoilState(passwordElementState(`${element}_${id}`));

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => setValue(value);

  return (
    <Labelled label="description">
      <TextArea name="description" onChange={handleChange} value={value} />
    </Labelled>
  );
};
