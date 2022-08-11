import { useRecoilValue } from 'recoil';

import styles from './Layout.module.css';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import { tokenState } from 'stores/UserStore';

import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const token = useRecoilValue(tokenState);

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
        {token ? <Sidebar /> : null}
      </main>
    </div>
  );
};
