import { useReducer } from 'react';

import classes from './EditingPanel.module.css';

import Button from 'atoms/Button';
import Divider from 'components/Divider';
import Input from 'atoms/Input';
import Labelled from 'atoms/Labelled';
import TextArea from 'atoms/TextArea';
import URLs from 'components/URLs';

import { formReducer, initialFormState } from './reducers/formReducer';

import type { FormState } from './reducers/formReducer';

export const EditingPanel = () => {
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);

  const onFillField = (field: keyof FormState, value: string) => formDispatch({ type: 'ON_FILL_FIELD', payload: { field, value } });

  const renderField = (name: keyof FormState) => (
    <Labelled label={name}>
      <Input name={name} onChange={({ target: { value } }) => onFillField(name, value)} value={formState[name]} />
    </Labelled>
  );

  const renderTextArea = (name: keyof FormState) => (
    <Labelled label={name}>
      <TextArea name={name} onChange={({ target: { value } }) => onFillField(name, value)} value={formState[name]} />
    </Labelled>
  );

  return (
    <div className={classes.editingPanel}>
      <div>
        <input placeholder="📝 Edit password's name" type="text" />
        <Divider />
        {renderField('username')}
        {renderField('password')}
        <Divider />
        <URLs />
        <Divider />
        {renderTextArea('description')}
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
