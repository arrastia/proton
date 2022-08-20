import { useState } from 'react';
import uniqid from 'uniqid';

import classes from './PasswordMainContainer.module.css';

import AppHeader from './AppHeader';
import NoPasswords from './NoPasswords';
import NoPasswordSelected from './NoPasswordSelected';
import PasswordEdit from './PasswordEdit';
import PasswordView from './PasswordView';

import { Passwords } from 'components/Passwords/Passwords';

import type { Password } from '../models';

function createNewPassword() {
  const id = uniqid();

  return { id, value: '' } as Password;
}

interface Props {
  decryptedPasswords: { [key: string]: Password };
  onLogout: () => void;
  onPasswordCreated: (password: Password) => void;
  onPasswordEdited: (password: Password) => void;
  onPasswordDeleted: (id: string) => void;
}

const PasswordMain = ({ decryptedPasswords, onLogout, onPasswordCreated, onPasswordEdited, onPasswordDeleted }: Props) => {
  const [editing, setEditing] = useState(false);
  const [selectedPasswordId, setSelectedPasswordId] = useState<string | null>(null);

  function handleCreatePassword() {
    const newPassword = createNewPassword();
    onPasswordCreated(newPassword);
    setSelectedPasswordId(newPassword.id);
    setEditing(true);
  }

  async function handleSelectPassword(id: string) {
    setSelectedPasswordId(id);
  }

  function handleDelete(id: string) {
    onPasswordDeleted(id);
    setEditing(false);
    setSelectedPasswordId(null);
  }

  function handleCancel() {
    setEditing(false);
  }

  function handlePasswordEditIntent() {
    setEditing(true);
  }

  function handleSave(password: Password) {
    onPasswordEdited(password);
    setEditing(false);
  }

  const amountOfVulnerablePasswords = Object.keys(decryptedPasswords).reduce<number>(
    (acc, key) => acc + +(decryptedPasswords[key].value.length < 3),
    0
  );

  return (
    <div className={classes.container}>
      <div className={classes.headerArea}>
        <AppHeader
          amountOfVulnerablePasswords={amountOfVulnerablePasswords}
          editing={editing}
          onLogout={onLogout}
          onNewPassword={handleCreatePassword}
        />
      </div>

      {/* <div className={classes.passwordsArea}>{Object.values(decryptedPasswords).length > 0 ? <Passwords /> : <NoPasswords />}</div> */}
      <div className={classes.passwordsArea}>{<Passwords />}</div>

      <div className={classes.passwordArea}>
        {selectedPasswordId !== null ? (
          editing ? (
            <PasswordEdit
              key={selectedPasswordId}
              onCancel={handleCancel}
              onDelete={() => handleDelete(selectedPasswordId)}
              onSave={handleSave}
              password={decryptedPasswords[selectedPasswordId]}
            />
          ) : (
            <PasswordView key={selectedPasswordId} onEdit={handlePasswordEditIntent} password={decryptedPasswords[selectedPasswordId]} />
          )
        ) : (
          <NoPasswordSelected />
        )}
      </div>
    </div>
  );
};

export default PasswordMain;
