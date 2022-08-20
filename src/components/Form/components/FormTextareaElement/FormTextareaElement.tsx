import { useRecoilState } from 'recoil';

import Labelled from 'atoms/Labelled';
import TextArea from 'atoms/TextArea';

import { passwordElementState } from 'stores/PasswrodElementState';

import type { ChangeEvent } from 'react';

export const FormTextareaElement = ({ element, id }: { id: string; element: string }) => {
  const [value, setValue] = useRecoilState(passwordElementState(`${element}_${id}`));

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => setValue(value);

  return (
    <Labelled label="description">
      <TextArea name="description" onChange={handleChange} value={value} />
    </Labelled>
  );
};
