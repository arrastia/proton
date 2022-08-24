import { Fragment, useState } from 'react';
import { useResetRecoilState } from 'recoil';

import styles from './Header.module.css';

import { Modal } from 'components/Modal';
import { Button } from 'atoms/Button/Button';
import Form from 'components/Form';
import Logo from 'components/Logo';

import { useAuth } from 'hooks/useAuth';

import { isAttemptedState } from 'stores/FormStore';

import type { ComponentPropsWithoutRef } from 'react';

export type HeaderProps = ComponentPropsWithoutRef<'header'>;

export const Header = ({ className, ...rest }: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const resetAttemptedState = useResetRecoilState(isAttemptedState);

  const { handleLogout } = useAuth();

  const onCleanUpModal = () => {
    resetAttemptedState();
    setIsVisible(false);
  };

  return (
    <Fragment>
      <header className={`${styles.header} ${className}`} {...rest}>
        <Logo />
        <div className={styles.actionButtons}>
          <Button onClick={() => setIsVisible(true)}>New Password</Button>
          <Button appearance="secondary" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </header>

      <Modal isVisible={isVisible} onClose={onCleanUpModal}>
        <Form onCancel={onCleanUpModal} onSave={onCleanUpModal} />
      </Modal>
    </Fragment>
  );
};
