import { useRecoilState, useRecoilValue } from 'recoil';

import Input from 'atoms/Input';
import { Labelled } from 'atoms/Labelled';

import { passwordElementState, passwordValidationErrorsState } from 'stores/PasswordElementState';
import { isAttemptedState } from 'stores/FormStore/FormStore';

import type { ChangeEvent } from 'react';
import type { Password } from 'models';
import type { InputType } from 'components/InputPassword/InputPassword';

type PasswordElement = Pick<Password, 'description' | 'name' | 'username' | 'value'>;

export const FormInputElement = ({ element, id, type }: { id: string; element: keyof PasswordElement; type?: InputType }) => {
  const [isAttempted, setIsAttempted] = useRecoilState(isAttemptedState);
  const [value, setValue] = useRecoilState(passwordElementState(`${element}_${id}`));

  const errors = useRecoilValue(passwordValidationErrorsState(`${element}_${id}`));

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
    setIsAttempted(false);
  };

  return (
    <Labelled label={element}>
      <Input isInvalid={isAttempted && value === ''} name={element} onChange={handleChange} value={value} type={type} />
    </Labelled>
  );
};
