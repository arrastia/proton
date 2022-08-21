import { PasswordPreview } from 'components/PasswordPreview';
import classes from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <p>Select an account to view its details</p>
      <PasswordPreview />
    </aside>
  );
};
