import { atomFamily, selectorFamily } from 'recoil';

import type { Password } from 'models';

type PasswordElement = Pick<Password, 'description' | 'name' | 'username' | 'value'>;

export const passwordElementState = atomFamily<string, `${keyof PasswordElement}_${string}`>({
  key: 'passwordElementState',
  default: ''
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

      console.log('title', title);

      return { createdAt: Date.now(), description, id, lastModifiedAt: Date.now(), name: title, url: [], username, value };
    }
});
