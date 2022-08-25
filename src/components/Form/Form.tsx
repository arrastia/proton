import { useGetRecoilValueInfo_UNSTABLE, useSetRecoilState } from 'recoil';

import { Styles } from './Form.styles';

import { Button } from 'atoms/Button/Button';
import { Divider } from 'components/Divider';
import URLs from 'components/URLs';

import { usePasswords } from 'components/Header/usePasswords';

import { isAttemptedState } from 'stores/FormStore/FormStore';
import { passwordElementState } from 'stores/PasswordElementState';

import type { Password } from 'models';
import type { FormProps } from './@types/Form.types';
import { PasswordName } from './components/PasswordName';
import { PasswordValue } from './components/PasswordValue';
import { PasswordDescription } from './components/PasswordDescription';
import { Username } from './components/Username';

const createPassword = (id: string): Password => {
  return { createdAt: Date.now(), description: '', id, lastModifiedAt: Date.now(), name: '', url: [], username: '', value: '' };
};

export const Form = ({ editId, onCancel, onDelete, onSave }: FormProps) => {
  const id = editId ? editId : createPassword(`${Date.now()}`).id;

  const getInfo = useGetRecoilValueInfo_UNSTABLE();

  const setIsAttempted = useSetRecoilState(isAttemptedState);

  const { addPassword, editPassword } = usePasswords();

  const handleSavePassword = () => {
    setIsAttempted(true);
    const username = getInfo(passwordElementState(`username_${id}`));
    const name = getInfo(passwordElementState(`name_${id}`));
    const value = getInfo(passwordElementState(`value_${id}`));

    const areFilled = username.loadable?.contents !== '' && name.loadable?.contents !== '' && value.loadable?.contents !== '';

    if (areFilled) {
      !editId ? addPassword(id) : editPassword(id);
      onSave?.();
    }
  };

  return (
    <Styles.Form>
      <PasswordName id={id} />
      <Divider />
      <Styles.Group>
        <Username id={id} />
        <PasswordValue id={id} />
      </Styles.Group>
      <Divider />
      <URLs id={id} />
      <Divider />
      <PasswordDescription id={id} />
      <Styles.ActionButtons>
        {editId ? <Button onClick={onDelete}>Delete</Button> : null}
        <div className="row">
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={handleSavePassword}>Save</Button>
        </div>
      </Styles.ActionButtons>
    </Styles.Form>
  );
};
