import { useState } from 'react';

import { Styles } from './InputPassword.styles';

import { Input } from 'atoms/Input';

import type { InputPasswordProps } from './@types/InputPassword.types';

export const InputPassword = ({ type = 'password', ...rest }: InputPasswordProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = (event: any) => {
    event.preventDefault();

    setIsPasswordVisible(prev => !prev);
  };

  const getType = () => {
    if (type === 'password') return isPasswordVisible ? 'text' : 'password';

    return 'text';
  };

  const renderActionButton = () => {
    switch (type) {
      case 'password':
        return (
          <Styles.TogglePassword className="glass" onClick={togglePasswordVisibility}>
            SHOW
          </Styles.TogglePassword>
        );

      default:
        return null;
    }
  };

  return (
    <Styles.Container>
      <Input type={getType()} {...rest} />
      {renderActionButton()}
    </Styles.Container>
  );
};
