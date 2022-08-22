import { useState } from 'react';

import { Styles } from './InputPassword.styles';

import Input from 'atoms/Input/Input';

export type InputType = 'text' | 'password' | 'email' | 'url' | 'new-password';

type Props = {
  type?: InputType;
};

export const InputPassword = ({ type }: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible(prev => !prev);

  const getType = () => {
    if (type === 'password') {
      return isPasswordVisible ? 'text' : 'password';
    }

    return type;
  };

  return (
    <Styles.Container>
      <Input />
      {type === 'password' ? (
        <Styles.TogglePassword color="light" onClick={togglePasswordVisibility}>
          SHOW
        </Styles.TogglePassword>
      ) : null}
    </Styles.Container>
  );
};
