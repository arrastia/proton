import * as storage from 'storage';

import { CRYPTO_KEY_STORAGE_KEY, PASSWORDS_STORAGE_KEY } from 'configuration/constants/storage';

import { base64StringToUint8Array, getKey } from 'utils/crypto';
import { decryptMessage, encryptMessage } from 'utils/CryptographyUtils/crypto';

import type { DefaultValue, WrappedValue } from 'recoil';
import type { Password } from 'models';

export const loadPersisted = async <T>(
  setSelf: (
    param: T | DefaultValue | Promise<T | DefaultValue> | WrappedValue<T> | ((param: T | DefaultValue) => T | DefaultValue | WrappedValue<T>)
  ) => void
) => {
  const savedValue = storage.getItem<{ iv: string; cipher: string } | null>(PASSWORDS_STORAGE_KEY);

  if (savedValue != null) {
    const { cipher, iv } = savedValue;

    const rawCryptoKey = storage.getItem(CRYPTO_KEY_STORAGE_KEY) as string;
    const key = await getKey(base64StringToUint8Array(rawCryptoKey));

    const decryptedPasswords = await decryptMessage(key, { cipher, iv });

    setSelf(JSON.parse(new TextDecoder().decode(decryptedPasswords)));
  }
};

export const setValues = async (newValue: Password[], _: Password[] | DefaultValue, isReset: boolean) => {
  const rawCryptoKey = storage.getItem<string>(CRYPTO_KEY_STORAGE_KEY);
  const key = await getKey(base64StringToUint8Array(rawCryptoKey));

  const encryptedPasswords = await encryptMessage(key, JSON.stringify(newValue));

  if (isReset) {
    storage.removeItem(PASSWORDS_STORAGE_KEY);
  } else {
    storage.setItem(PASSWORDS_STORAGE_KEY, encryptedPasswords);
  }
};
