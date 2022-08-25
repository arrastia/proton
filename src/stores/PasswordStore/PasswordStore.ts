import { atom, selector, selectorFamily } from 'recoil';

import { passwordStore } from 'stores/PasswordElementState';

import { loadPersisted, setValues } from './utils/localStorageEffect';

import type { Password } from 'models';

export const allPasswordsState = atom<Password[]>({
  key: 'allPasswordsState',
  default: [],
  effects: [
    ({ onSet, setSelf, trigger }) => {
      if (trigger === 'get') loadPersisted(setSelf);

      onSet(setValues);
    }
  ]
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
