import { useRecoilValue } from 'recoil';

import classes from './PasswordForm.module.css';

import { titleState } from 'stores/SinglePasswordStore';

const useForm = (id: string) => {
  const title = useRecoilValue(titleState(id));
};

export const Form = ({ id }: { id: string }) => {
  useForm(id);

  return (
    <div className={classes.editingPanel} role="form">
      <div>
        <input type="text" />
      </div>
    </div>
  );
};
