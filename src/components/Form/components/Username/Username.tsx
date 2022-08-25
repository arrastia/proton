import { useRecoilState, useRecoilValue } from 'recoil';

import { Input } from 'atoms/Input';

import { passwordElementState, passwordValidationErrorsState } from 'stores/PasswordElementState';
import { isAttemptedState } from 'stores/FormStore/FormStore';

import type { ChangeEvent } from 'react';

export const Username = ({ id }: { id: string }) => {
  const [isAttempted, setIsAttempted] = useRecoilState(isAttemptedState);
  const [value, setValue] = useRecoilState(passwordElementState(`username_${id}`));

  const errors = useRecoilValue(passwordValidationErrorsState(`username_${id}`));

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
    setIsAttempted(false);
  };

  return <Input isInvalid={isAttempted && value === ''} name="username" onChange={handleChange} placeholder="Username" value={value} />;
};
