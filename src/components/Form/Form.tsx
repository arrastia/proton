import classes from './Form.module.css';

import Button from 'atoms/Button';
import Divider from 'components/Divider';
import FormInputElement from './components/FormInputElement';
import FormTextareaElement from './components/FormTextareaElement';
import URLs from 'components/URLs';

export const Form = ({ id }: { id: string }) => {
  return (
    <div className={classes.editingPanel}>
      <FormInputElement element={'title'} id={id} />
      <Divider />
      <FormInputElement element={'username'} id={id} />
      <FormInputElement element={'password'} id={id} />
      <Divider />
      <URLs id={id} />
      <Divider />
      <FormTextareaElement element={'description'} id={id} />
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
