import { TextareaStyles } from './Textarea.styles';

import type { ComponentPropsWithoutRef } from 'react';

export interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {}

export function Textarea({ className, ...rest }: TextareaProps) {
  return <TextareaStyles className={className} {...rest} rows={10} />;
}
