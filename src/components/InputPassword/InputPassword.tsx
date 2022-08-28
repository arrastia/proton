import { useState } from 'react';

import { Styles } from './InputPassword.styles';

import { eye } from 'assets/lotties';

import { Input } from 'atoms/Input';

import { generatePassword } from 'utils/PasswordUtils/generatePassword';

import type { InputPasswordProps } from './@types/InputPassword.types';
import { VisibilityIcon } from './components/VisibilityIcon';

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
        return (
          <VisibilityIcon
            // animation={{ animationData: eye, animationKey: 'visibility' }}
            onClick={togglePasswordVisibility}
            // reverse={isPasswordVisible}
            size={40}
          />
        );

      case 'new-password':
        return <Styles.TogglePassword onClick={handlePasswordGenerator}>G</Styles.TogglePassword>;

      default:
        return null;
    }
  };

  return (
    <Styles.Container>
      <Input onFocus={handleFocus} type={getType()} value={strongPassword || value} {...rest} />
      {renderActionButton()}
    </Styles.Container>
  );
};
