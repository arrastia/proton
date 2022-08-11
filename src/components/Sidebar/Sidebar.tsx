import styles from './Sidebar.module.css';

import Button from 'atoms/Button';
import Divider from 'components/Divider';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h1>Order summary</h1>
      <Divider />
      TOTAL COST
      <Button>klasjd</Button>
    </aside>
  );
};
