import { atom } from 'recoil';

export const tokenState = atom<CryptoKey | null>({
  key: 'tokenState',
  default: null
});

export const isDarkModeState = atom<boolean>({
  key: 'isDarkModeState',
  default: false
});
