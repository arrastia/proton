import type { Url } from 'models/Url';
import { selectorFamily } from 'recoil';
import { passwordsState } from './PasswordStore';

export const urlStore = selectorFamily<Url[], string>({
  key: 'selectorFamily',
  get:
    (id: string) =>
    ({ get }) => {
      const { url } = get(passwordsState(id));

      return url;
    }
});
