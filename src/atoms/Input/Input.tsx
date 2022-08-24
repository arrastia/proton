import { InputStyles } from './Input.styles';

import type { InputProps } from './@types/Input.types';

export function Input({ className, isInvalid, ...rest }: InputProps) {
  return <InputStyles className={`${className} ${isInvalid ? 'isInvalid' : ''}`} {...rest} />;
}
