import { useSetRecoilState } from 'recoil';

import { LocaleByPage, messages } from 'configuration/locale';

import { selectedLanguage } from 'stores/UserStore';

import type { Languages } from 'configuration/locale';
import type { useLocaleProps } from './@types/useLocale.types';
import type { Routes } from 'configuration/routes';

export const useLocale = <T extends Routes>({ page }: useLocaleProps) => {
  const setLocale = useSetRecoilState(selectedLanguage);

  const handleChangeLanguage = (language: Languages) => setLocale(language);

  return { messages: messages[page] as LocaleByPage<T>, handleChangeLanguage };
};
