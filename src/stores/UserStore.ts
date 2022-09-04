import { atom } from 'recoil';

import type { Languages } from 'configuration/locale';

export const tokenState = atom<CryptoKey | string | null>({
  key: 'tokenState',
  default: null
});

export const isDarkModeState = atom<boolean>({
  key: 'isDarkModeState',
  default: false
});

export const selectedLanguage = atom<Languages>({
  key: 'selectedLanguage',
  default: 'en'
});
