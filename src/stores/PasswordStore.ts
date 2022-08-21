import { atom, atomFamily, selector, selectorFamily } from 'recoil';

import { PASSWORDS_STORAGE_KEY } from 'configuration/constants/storage';

import { passwordStore } from './PasswordElementState';

import type { Password } from 'models';

export const allPasswordsState = atom<Password[]>({
  key: 'allPasswordsState',
  default: [],
  // effects: `[32m[allPasswordsState][0m`
  effects: [
    ({ setSelf, onSet }) =>
      () => {
        const savedValue = localStorage.getItem(PASSWORDS_STORAGE_KEY);
        console.log('savedValue', savedValue);
        if (savedValue != null) {
          setSelf(JSON.parse(savedValue));
        }

        onSet((newValue, _, isReset) => {
          isReset ? localStorage.removeItem(PASSWORDS_STORAGE_KEY) : localStorage.setItem(PASSWORDS_STORAGE_KEY, JSON.stringify(newValue));
        });
      }
  ]
});

export const passwordsState = atomFamily<Password, string>({
  key: 'passwordsState',
  default: () => ({
    createdAt: Date.now(),
    description: '',
    id: '',
    lastModifiedAt: Date.now(),
    name: '',
    url: [],
    username: '',
    value: ''
  })
});

export const selectedPasswordIdState = atom<string>({
  key: 'selectedPasswordIdState',
  default: ''
});

export const isSelectedState = selectorFamily({
  key: 'isSelected',
  get:
    (id: string) =>
    ({ get }) => {
      const selectedId = get(selectedPasswordIdState);
      return selectedId === id;
    }
});

export const selectedElementState = selector<Password>({
  key: 'selectedElement',
  get: ({ get }) => {
    const id = get(selectedPasswordIdState);

    return get(passwordStore(id));
  }
});
