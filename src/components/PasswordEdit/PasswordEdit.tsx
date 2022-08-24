import { useCallback, useState } from 'react';

import classes from './PasswordEdit.module.css';

import { Button } from 'atoms/Button/Button';
import { Labelled } from 'atoms/Labelled';
import { Textarea } from 'atoms/Textarea';
import { UrlList } from './components/UrlList/UrlList';
import Icon from 'atoms/Icon';
import { Input } from 'atoms/Input';
import LabelledIconButton from 'components/LabelledIconButton';

function PasswordEdit({ onCancel, onDelete, onSave, password }: any) {
  const [urlInput, setUrlInput] = useState('');
  const [values, setValues] = useState(password);

  function change(partial: any) {
    setValues((values: any) => ({ ...values, ...partial }));
  }

  function handleChange(e: any) {
    change({ [e.target.name]: e.target.value });
  }

  function handleSaveClick() {
    onSave({ ...password, ...values });
  }

  function handleDeleteClick() {
    onDelete();
  }

  function handleCancelClick() {
    onCancel();
  }

  function handleUrlAdd() {
    const urls = values.url || [];

    urls.unshift(urlInput);

    change({ url: urls });

    setUrlInput('');
  }

  const handleUrlDelete = useCallback(
    (index: any) => () => {
      const urls = values.url || [];

      urls.splice(index, 1);

      change({ url: urls });
    },
    []
  );

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>
        <input autoFocus className={classes.titleInput} name="name" onChange={handleChange} value={values.name} />
      </h2>
      <div className={classes.content}>
        <Labelled label="description">
          <Textarea name="description" onChange={handleChange} value={values.description} />
        </Labelled>

        <Labelled label="value">
          <Input name="value" onChange={handleChange} value={values.value} />
        </Labelled>

        <Labelled label="url">
          <div>
            <Input onChange={e => setUrlInput(e.target.value)} style={{ marginRight: 4 }} value={urlInput} />

            <Button onClick={handleUrlAdd}>Add</Button>
          </div>

          <UrlList onDelete={handleUrlDelete} urls={values.url} />
        </Labelled>
      </div>
      <div className={classes.controls}>
        <LabelledIconButton
          className={classes.cancel}
          icon={<Icon className="fas fa-times" size="small" />}
          label="Cancel"
          onClick={handleCancelClick}
        />

        <LabelledIconButton icon={<Icon className="fas fa-save" size="small" />} label="Save" onClick={handleSaveClick} />

        <LabelledIconButton
          className={classes.delete}
          icon={<Icon className="fas fa-trash" size="small" />}
          label="Delete"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
}

export default PasswordEdit;
