import { useRecoilValue } from 'recoil';

import classes from './Sidebar.module.css';

import { PasswordPreview } from 'components/PasswordPreview';

import { selectedPasswordIdState } from 'stores/PasswordStore';
import { NoPasswordSelected } from './NoPasswordSelected';

export const Sidebar = () => {
  const isSelected = useRecoilValue(selectedPasswordIdState);

  const renderContent = () => {
    if (!isSelected) return <NoPasswordSelected />;

    return <PasswordPreview />;
  };

  return <aside className={classes.sidebar}>{renderContent()}</aside>;
};
