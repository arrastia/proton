import { ButtonStyles } from './Button.styles';

import { Spinner } from 'components/Spinner';

import type { ButtonProps } from './@types/Button.types';

export function Button({ appearance = 'primary', children, className, disabled, isLoading, ...rest }: ButtonProps) {
  return (
    <ButtonStyles appearance={appearance} className={`${className} ${appearance}`} disabled={disabled || isLoading} {...rest}>
      {isLoading ? <Spinner /> : children}
    </ButtonStyles>
  );
}
