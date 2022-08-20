import { useReducer } from 'react';

import classes from './PasswordForm.module.css';

import { PasswordDescription } from './components/PasswordDescription';
import { PasswordTitle } from './components/PasswordTitle';
import Button from 'atoms/Button';
import Divider from 'components/Divider';
import Input from 'atoms/Input';
import Labelled from 'atoms/Labelled';
import URLs from 'components/URLs';

import { formReducer, initialFormState } from './reducers/formReducer';

import type { FormState } from './reducers/formReducer';
import { PasswordChore } from './components/PasswordChore';

export const PasswordForm = ({ id }: { id: string }) => {
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);

  const onFillField = (field: keyof FormState, value: string) => formDispatch({ type: 'ON_FILL_FIELD', payload: { field, value } });

  const renderField = (name: keyof FormState) => (
    <Labelled label={name}>
      <Input name={name} onChange={({ target: { value } }) => onFillField(name, value)} value={formState[name]} />
    </Labelled>
  );

  return (
    <div className={classes.editingPanel}>
      <div>
        <PasswordTitle id={id} />
        <Divider />
        <PasswordChore id={id} />
        <Divider />
        <URLs id={id} />
        <Divider />
        <PasswordDescription id={id} />
      </div>
      <div className={`row ${classes.actionButtons}`}>
        <Button>Delete</Button>
        <div className="row">
          <Button>Cancel</Button>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
};
