import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string;
  children: ReactNode;
}

export const Link = ({ children, ...rest }: LinkProps) => {
  return (
    <a rel="noopener noreferrer nofollow" {...rest}>
      {children}
    </a>
  );
};
