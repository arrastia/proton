import type { InputProps } from 'atoms/Input';

export type InputPasswordType = 'password' | 'new-password';

export interface InputPasswordProps extends InputProps {
  type?: InputPasswordType;
}
