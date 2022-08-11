import styles from './Divider.module.css';

export interface DividerProps {
  direction?: 'horizontal' | 'vertical';
}

export const Divider = ({ direction = 'horizontal' }: DividerProps) => <hr className={`${styles.divider} ${direction}`} />;
