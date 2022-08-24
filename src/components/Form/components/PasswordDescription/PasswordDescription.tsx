import { useRecoilState } from 'recoil';

import { Textarea } from 'atoms/Textarea';

import { passwordElementState } from 'stores/PasswordElementState';

import type { ChangeEvent } from 'react';

export const PasswordDescription = ({ id }: { id: string }) => {
  const [value, setValue] = useRecoilState(passwordElementState(`description_${id}`));

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => setValue(value);

  return <Textarea name="description" onChange={handleChange} placeholder="📝 Description" value={value} />;
};
