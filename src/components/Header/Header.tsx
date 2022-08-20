import styles from './Header.module.css';

// import { ThemeButton } from 'components/ThemeButton';
import Button from 'atoms/Button';
import Logo from 'components/Logo';

import { ComponentPropsWithoutRef, Fragment, useState } from 'react';
import { Modal } from 'components/Modal';
import { PasswordForm } from 'components/PasswordForm';
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
            // disabled={isEditing}
            onClick={() => {
              setIsVisible(true);
              addPassword();
            }}
          >
            New Password
          </Button>
          <Button onClick={handleLogout}>Log out</Button>
          {/* <Button label="Log in"></Button> */}
          {/* <ThemeButton /> */}
        </div>
      </header>

      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <PasswordForm id={id} />
      </Modal>
    </Fragment>
  );
};
