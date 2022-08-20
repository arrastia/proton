import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import styles from './Layout.module.css';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import { tokenState } from 'stores/UserStore';

export const Layout = () => {
  const token = useRecoilValue(tokenState);

  console.log(' enbwtoken :>> ', token);

  return (
    <div className={styles.layout}>
      {token ? <Header /> : null}
      <main className={styles.main}>
        <Outlet />
        {token ? <Sidebar /> : null}
      </main>
    </div>
  );
};
