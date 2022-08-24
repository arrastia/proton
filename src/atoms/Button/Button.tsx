import { ButtonStyles } from './Button.styles';

import type { ButtonProps } from './@types/Button.types';

export function Button({ className, appearance = 'primary', ...rest }: ButtonProps) {
  return <ButtonStyles appearance={appearance} className={`${className} ${appearance}`} {...rest} />;
}
