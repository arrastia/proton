import styles from './Layout.module.css';

// import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      {/* <Header /> */}
      <main className={styles.main}>
        {children}
        <Sidebar />
      </main>
    </div>
  );
};
