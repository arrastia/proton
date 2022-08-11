import styles from './Logo.module.css';

import { logo } from 'assets/images';

import { useFountain } from 'hooks/useFountain';

export const Logo = () => {
  const fountainImageRef = useFountain<HTMLImageElement>(logo);

  return <img alt="Proton Logo" className={styles.logo} ref={fountainImageRef} src={logo} />;
};
