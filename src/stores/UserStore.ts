import { atom } from 'recoil';

export const tokenState = atom<CryptoKey | string | null>({
  key: 'tokenState',
  default: null
});

export const isDarkModeState = atom<boolean>({
  key: 'isDarkModeState',
  default: false
});
