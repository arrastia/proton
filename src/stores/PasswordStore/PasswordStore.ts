import { atom, atomFamily, selector, selectorFamily } from 'recoil';

import { passwordStore } from 'stores/PasswordElementState';

import { loadPersisted, setValues } from './utils/localStorageEffect';

import type { Password } from 'models';

export const allPasswordsState = atom<Password[]>({
  key: 'allPasswordsState',
  default: [],
  effects: [
    ({ setSelf, onSet, trigger }) => {
      if (trigger === 'get') loadPersisted(setSelf);

      onSet(setValues);
    }
  ]
});

export const passwordsState = atomFamily<Password, string>({
  key: 'passwordsState',
  default: () => ({ createdAt: Date.now(), description: '', id: '', lastModifiedAt: Date.now(), name: '', url: [], username: '', value: '' })
});

export const selectedPasswordIdState = atom<string>({
  key: 'selectedPasswordIdState',
  default: ''
});

export const isSelectedState = selectorFamily({
  key: 'isSelected',
  get:
    (id: string) =>
    ({ get }) =>
      get(selectedPasswordIdState) === id
});

export const selectedElementState = selector<Password>({
  key: 'selectedElement',
  get: ({ get }) => get(passwordStore(get(selectedPasswordIdState)))
});
