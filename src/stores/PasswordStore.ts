import { atom, atomFamily, selector, selectorFamily } from 'recoil';

import type { Password } from 'models';

export const allPasswordsState = atom<Password[]>({
  key: 'allPasswordsState',
  default: []
});

export const passwordsState = atomFamily<Password, string>({
  key: 'passwordsState',
  default: () => ({ createdAt: Date.now(), description: '', id: '', lastModifiedAt: Date.now(), name: '', url: [], value: '' })
});

export const selectedPasswordIdState = atom<string>({
  key: 'selectedPasswordIdState',
  default: ''
});

export const selectedElementState = selector<Password>({
  key: 'selectedElement',
  get: ({ get }) => {
    const id = get(selectedPasswordIdState);

    return get(passwordsState(id));
  }
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
