import classes from './Sidebar.module.css';

import { PasswordForm } from 'components/PasswordForm';

export const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      {/* <PasswordForm /> */}
      <p>Select an account to view its details</p>
    </aside>
  );
};
