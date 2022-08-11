import styles from './Header.module.css';

import Logo from 'components/Logo';
// import { ThemeButton } from 'components/ThemeButton';

import type { ComponentPropsWithoutRef } from 'react';
import Button from 'atoms/Button';

export type HeaderProps = ComponentPropsWithoutRef<'header'>;

export const Header = ({ className, ...rest }: HeaderProps) => (
  <header className={`${styles.header} ${className}`} {...rest}>
    <Logo />

    <div className={styles.actionButtons}>
      <Button>New Password</Button>
      <Button>Log out</Button>
      {/* <Button label="Log in"></Button> */}
      {/* <ThemeButton /> */}
    </div>
  </header>
);
