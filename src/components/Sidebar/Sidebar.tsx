import { useRecoilValue } from 'recoil';

import classes from './Sidebar.module.css';

import { NoPasswordSelected } from './components/NoPasswordSelected';
import { PasswordPreview } from 'components/PasswordPreview';

import { selectedPasswordIdState } from 'stores/PasswordStore';

export const Sidebar = () => {
  const isSelected = useRecoilValue(selectedPasswordIdState);

  const renderContent = () => {
    if (!isSelected) return <NoPasswordSelected />;

    return <PasswordPreview />;
  };

  return <aside className={classes.sidebar}>{renderContent()}</aside>;
};
