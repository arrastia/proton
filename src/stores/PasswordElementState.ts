import { atom, atomFamily, selector, selectorFamily } from 'recoil';

import { validate } from 'utils/PasswordUtils/validatePassword';

import type { Password } from 'models';

type PasswordElement = Pick<Password, 'description' | 'name' | 'username' | 'value'>;

export const passwordElementState = atomFamily<string, `${keyof PasswordElement}_${string}`>({
  key: 'passwordElementState',
  default: ''
});

export const passwordValidationErrorsState = selectorFamily({
  key: 'passwordValidationErrorsState',
  get:
    (id: `${keyof PasswordElement}_${string}`) =>
    ({ get }) =>
      validate(get(passwordElementState(id))).errors
});

export const passwordStore = selectorFamily<Password, string>({
  key: 'passwordStore',
  get:
    (id: string) =>
    ({ get }) => {
      const description = get(passwordElementState(`description_${id}`));
      const title = get(passwordElementState(`name_${id}`));
      const username = get(passwordElementState(`username_${id}`));
      const value = get(passwordElementState(`value_${id}`));

      return {
        createdAt: Date.now(),
        description,
        id,
        lastModifiedAt: Date.now(),
        name: title,
        url: [],
        username,
        value,
        isVulnerable: false
      };
    }
});
