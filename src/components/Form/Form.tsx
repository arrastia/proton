import { useGetRecoilValueInfo_UNSTABLE, useSetRecoilState } from 'recoil';

import classes from './Form.module.css';

import { Button } from 'atoms/Button/Button';
import Divider from 'components/Divider';
import FormInputElement from './components/FormInputElement';
import FormTextareaElement from './components/FormTextareaElement';
import URLs from 'components/URLs';

import { usePasswords } from 'components/Header/usePasswords';

import { isAttemptedState } from 'stores/FormStore/FormStore';
import { passwordElementState } from 'stores/PasswordElementState';

import type { Password } from 'models';
import type { FormProps } from './@types/Form.types';

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
    <div className={classes.editingPanel}>
      <FormInputElement element="name" id={id} />
      <Divider />
      <FormInputElement element="username" id={id} />
      <FormInputElement element="value" id={id} type="password" />
      <Divider />
      <URLs id={id} />
      <Divider />
      <FormTextareaElement element="description" id={id} />
      <div className={`row ${classes.actionButtons}`}>
        {editId ? <Button onClick={onDelete}>Delete</Button> : null}
        <div className="row">
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={handleSavePassword}>Save</Button>
        </div>
      </div>
    </div>
  );
};
