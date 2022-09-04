import { useState } from 'react';

import { Styles } from './InputPassword.styles';

import { Button } from 'atoms/Button';
import { VisibilityIcon } from './components/VisibilityIcon';

import { generatePassword } from 'utils/PasswordUtils/generatePassword';

import type { InputPasswordProps } from './@types/InputPassword.types';

export const InputPassword = ({ onFocus, type = 'password', value, ...rest }: InputPasswordProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [strongPassword, setStrongPassword] = useState('');

  const handleFocus = (event: any) => {
    onFocus?.(event);

    setStrongPassword('');
  };

  const handlePasswordGenerator = () => setStrongPassword(generatePassword());

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
        return <VisibilityIcon onClick={togglePasswordVisibility} size={40} />;

      case 'new-password':
        return (
          <Button appearance="default" onClick={handlePasswordGenerator}>
            G
          </Button>
        );

      default:
        return null;
    }
  };

  return (
    <Styles.Container>
      <Styles.PasswordInput onFocus={handleFocus} type={getType()} value={strongPassword || value} {...rest} />
      {renderActionButton()}
    </Styles.Container>
  );
};
