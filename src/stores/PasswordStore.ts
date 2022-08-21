import { atom, atomFamily, DefaultValue, selector, selectorFamily } from 'recoil';
import * as storage from 'storage';

import { CRYPTO_KEY_STORAGE_KEY, PASSWORDS_STORAGE_KEY } from 'configuration/constants/storage';

import { passwordStore } from './PasswordElementState';

import { base64StringToUint8Array, getKey } from 'utils/crypto';
import { decryptMessage, encryptMessage } from 'utils/CryptographyUtils/crypto';

import type { Password } from 'models';

const setValues = async (newValue: Password[], oldValue: Password[] | DefaultValue, isReset: boolean) => {
  const rawCryptoKey = storage.getItem<string>(CRYPTO_KEY_STORAGE_KEY);
  const key = await getKey(base64StringToUint8Array(rawCryptoKey));
  const encryptedPasswords = await encryptMessage(key, JSON.stringify(newValue));

  const buffer = new Uint8Array(encryptedPasswords);
  const decryptedPasswords = await decryptMessage(key, buffer);

  const result = new TextDecoder().decode(decryptedPasswords);
  console.log('RPEV DEV', result);

  if (isReset) {
    storage.removeItem(PASSWORDS_STORAGE_KEY);
  } else {
    storage.setItem(PASSWORDS_STORAGE_KEY, buffer);
  }
};

export const allPasswordsState = atom<Password[]>({
  key: 'allPasswordsState',
  default: [],
  effects: [
    ({ setSelf, onSet, trigger }) =>
      () => {
        const loadPersisted = async () => {
          const savedValue = storage.getItem<Uint8Array>(PASSWORDS_STORAGE_KEY);

          if (savedValue != null) {
            // const parsedSaved = base64StringToUint8Array(savedValue);
            const rawCryptoKey = storage.getItem(CRYPTO_KEY_STORAGE_KEY) as string;
            const key = await getKey(base64StringToUint8Array(rawCryptoKey));

            console.log('savedValue', savedValue);

            const decryptedPasswords = await decryptMessage(key, new Uint8Array(savedValue));
            console.log('decryptedPasswords', decryptedPasswords);

            const result = new TextDecoder().decode(decryptedPasswords);
            console.log('result', result);

            setSelf(JSON.parse(result));
          }
        };

        if (trigger === 'get') {
          loadPersisted().catch(error => console.error(error));
        }
        onSet(setValues);
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
