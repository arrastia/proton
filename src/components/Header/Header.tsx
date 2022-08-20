import styles from './Header.module.css';

// import { ThemeButton } from 'components/ThemeButton';
import Button from 'atoms/Button';
import Logo from 'components/Logo';

import { ComponentPropsWithoutRef, Fragment, useState } from 'react';
import { Modal } from 'components/Modal';
import Form from 'components/Form';
import { useAddPassword } from 'hooks/usePasswords/useAddPassword';
import { useAuth } from 'hooks/useAuth';

export type HeaderProps = ComponentPropsWithoutRef<'header'>;

export const Header = ({ className, ...rest }: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const { addPassword, id } = useAddPassword();
  const { handleLogout } = useAuth();

  return (
    <Fragment>
      <header className={`${styles.header} ${className}`} {...rest}>
        <Logo />

        <div className={styles.actionButtons}>
          <Button
            onClick={() => {
              setIsVisible(true);
              addPassword();
            }}>
            New Password
          </Button>
          <Button onClick={handleLogout}>Log out</Button>
        </div>
      </header>

      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <Form id={id} />
      </Modal>
    </Fragment>
  );
};
