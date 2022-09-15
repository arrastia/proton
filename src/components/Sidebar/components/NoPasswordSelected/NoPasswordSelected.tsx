import { Styles } from './NoPasswordSelected.styles';

import { useLocale } from 'hooks/useLocale';

export const NoPasswordSelected = () => {
  const { messages } = useLocale<'DASHBOARD'>({ page: 'DASHBOARD' });

  return <Styles.NoPasswordSelectedContainer>{messages['selectAnAccountToViewDetails']}</Styles.NoPasswordSelectedContainer>;
};
