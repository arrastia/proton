import { atomFamily, selectorFamily } from 'recoil';
import * as storage from 'storage';

import { CRYPTO_KEY_STORAGE_KEY, PASSWORDS_STORAGE_KEY } from 'configuration/constants/storage';

import { validate } from 'utils/PasswordUtils/validatePassword';

import type { DefaultValue, WrappedValue } from 'recoil';
import type { Password } from 'models';
import { base64StringToUint8Array, getKey } from 'utils/crypto';
import { decryptMessage } from 'utils/CryptographyUtils/crypto';

type PasswordElement = Pick<Password, 'description' | 'name' | 'username' | 'value'>;

const loadElementData = async <T>(
  setSelf: (
    param: T | string | DefaultValue | Promise<T | DefaultValue> | WrappedValue<T> | ((param: T | DefaultValue) => T | DefaultValue | WrappedValue<T>)
  ) => void,
  id: `${keyof PasswordElement}_${string}`
) => {
  const savedValue = storage.getItem<{ iv: string; cipher: string } | null>(PASSWORDS_STORAGE_KEY);
  console.log('id', id);

  if (savedValue !== null) {
    const { cipher, iv } = savedValue;

    const rawCryptoKey = storage.getItem<string>(CRYPTO_KEY_STORAGE_KEY);
    const key = await getKey(base64StringToUint8Array(rawCryptoKey));

    const decryptedPasswords: Password[] = JSON.parse(new TextDecoder().decode(await decryptMessage(key, { cipher, iv })));
    const [passwordElement, passwordId] = id.split('_') as [keyof PasswordElement, string];

    const element = decryptedPasswords.find(({ id: elementId }) => elementId === passwordId)?.[passwordElement];

    setSelf(element ? element : '');
  }
};

export const passwordElementState = atomFamily<string, `${keyof PasswordElement}_${string}`>({
  key: 'passwordElementState',
  default: '',
  effects: id => [
    ({ setSelf, trigger }) => {
      if (trigger === 'get') loadElementData<string>(setSelf, id);
    }
  ]
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

      return { createdAt: Date.now(), description, id, isVulnerable: false, lastModifiedAt: Date.now(), name: title, url: [], username, value };
    }
});
