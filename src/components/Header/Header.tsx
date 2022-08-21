import { ComponentPropsWithoutRef, Fragment, useId, useState } from 'react';

import styles from './Header.module.css';

import { Modal } from 'components/Modal';
import Button from 'atoms/Button';
import Form from 'components/Form';
import Logo from 'components/Logo';

import { useAuth } from 'hooks/useAuth';
import { usePasswords } from './usePasswords';

import type { Password } from 'models';

export type HeaderProps = ComponentPropsWithoutRef<'header'>;

export const Header = ({ className, ...rest }: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const { addPassword } = usePasswords();
  const { handleLogout } = useAuth();

  const handleSave = () => {
    setIsVisible(false);
  };

  return (
    <Fragment>
      <header className={`${styles.header} ${className}`} {...rest}>
        <Logo />
        <div className={styles.actionButtons}>
          <Button onClick={() => setIsVisible(true)}>New Password</Button>
          <Button onClick={handleLogout}>Log out</Button>
        </div>
      </header>

      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <Form onSave={handleSave} />
      </Modal>
    </Fragment>
  );
};
