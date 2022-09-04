import { useLocale } from 'hooks/useLocale';

export const NoPasswordSelected = () => {
  const { messages } = useLocale<'DASHBOARD'>({ page: 'DASHBOARD' });

  return <p>{messages['selectAnAccountToViewDetails']}</p>;
};
