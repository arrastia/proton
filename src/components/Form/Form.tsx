import classes from './Form.module.css';

import { Button } from 'atoms/Button/Button';
import Divider from 'components/Divider';
import FormInputElement from './components/FormInputElement';
import FormTextareaElement from './components/FormTextareaElement';
import URLs from 'components/URLs';

import type { Password } from 'models';
import type { FormProps } from './@types/Form.types';
import { usePasswords } from 'components/Header/usePasswords';

const createPassword = (id: string): Password => {
  return { createdAt: Date.now(), description: '', id, lastModifiedAt: Date.now(), name: '', url: [], username: '', value: '' };
};

export const Form = ({ editId, onCancel, onDelete, onSave }: FormProps) => {
  const { addPassword } = usePasswords();

  const id = editId ? editId : createPassword(`${Date.now()}`).id;

  const handleSavePassword = () => {
    addPassword(id);
    onSave?.();
  };

  return (
    <div className={classes.editingPanel}>
      <FormInputElement element="name" id={id} />
      <Divider />
      <FormInputElement element="username" id={id} />
      <FormInputElement element="value" id={id} />
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
