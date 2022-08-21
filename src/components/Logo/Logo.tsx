import styles from './Logo.module.css';

import { calendar, mail, logo, vpn, drive } from 'assets/images';

import { useFountain } from 'hooks/useFountain';

export const Logo = () => {
  const fountainImageRef = useFountain<HTMLImageElement>([mail, calendar, vpn, drive]);

  return <img alt="Proton Logo" className={styles.logo} ref={fountainImageRef} src={logo} />;
};
