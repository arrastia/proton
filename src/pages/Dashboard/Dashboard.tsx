import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import * as storage from 'storage';
import { encrypt, decrypt, getKey, base64StringToUint8Array } from '../../crypto';
import { wait } from 'helpers';
import { CRYPTO_KEY_STORAGE_KEY, PASSWORDS_STORAGE_KEY } from '../../constants';

import Layout from 'components/Layout';
import PasswordLockedContainer from 'components/PasswordLockedContainer';
import PasswordMainContainer from 'components/PasswordMainContainer';

import { tokenState } from 'stores/UserStore';

import type { Password } from 'models';
import type { ReactNode } from 'react';

function duplicateUrlsAmongPasswords(passwords: { [id: string]: Password }) {
  return null;
}

export function Dashboard() {
  const setToken = useSetRecoilState(tokenState);

  const [decryptedPasswords, setDecryptedPasswords] = useState<{ [id: string]: Password }>({});
  const [key, setKey] = useState<CryptoKey | null>(null);
  const [loading, setLoading] = useState(true);

  async function hydratePasswords(newKey: CryptoKey) {
    setKey(newKey);
    setToken(newKey);

    await wait(500);
    const encryptedPasswords = JSON.parse(storage.getItem(PASSWORDS_STORAGE_KEY));
    if (!encryptedPasswords) {
      return;
    }
    const decryptedPasswords = JSON.parse(await decrypt(newKey, encryptedPasswords));
    setDecryptedPasswords(decryptedPasswords);
  }

  function handleSuccess(newKey: CryptoKey) {
    const run = async () => {
      try {
        await hydratePasswords(newKey);
      } catch (e) {
        return;
      }
    };

    setLoading(true);
    run().finally(() => setLoading(false));
  }

  useEffect(() => {
    const rawCryptoKey = storage.getItem<string>(CRYPTO_KEY_STORAGE_KEY);

    if (!rawCryptoKey) {
      setLoading(false);
      return;
    }

    getKey(base64StringToUint8Array(rawCryptoKey)).then(storedKey => {
      setKey(storedKey);
      setToken(storedKey);
      handleSuccess(storedKey);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    async function sync() {
      if (!key) {
        return;
      }

      const data = JSON.stringify(decryptedPasswords);
      const encryptedPasswords = await encrypt(key, data);
      storage.setItem(PASSWORDS_STORAGE_KEY, JSON.stringify(encryptedPasswords));
    }

    sync();
  }, []);

  function handleLogout() {
    storage.removeItem(CRYPTO_KEY_STORAGE_KEY);
    setKey(null);
    setToken(null);
  }

  function handlePasswordCreated(password: Password) {
    setDecryptedPasswords(passwords => ({
      ...passwords,
      [password.id]: password
    }));
  }

  function handlePasswordEdited(password: Password) {
    const nextPasswords = {
      ...decryptedPasswords,
      [password.id]: { ...password, lastModifiedAt: Date.now() }
    };
    const duplicateUrls = duplicateUrlsAmongPasswords(decryptedPasswords);

    if (duplicateUrls) {
      /*
       * if there are duplicate urls among the passwords alert a message such as
       * 'Duplicate url "https://foobar.com" found for passwords "foo", "bar", "baz"'
       */
    }

    setDecryptedPasswords(nextPasswords);
  }

  function handlePasswordDeleted(id: string) {
    setDecryptedPasswords(passwords => {
      const { [id]: deleted, ...remaining } = passwords;

      return remaining;
    });
  }

  const renderLayout = (children: ReactNode) => <Layout>{children}</Layout>;

  if (loading) {
    return <>Loading</>;
  }

  if (!key) {
    return renderLayout(<PasswordLockedContainer onSuccess={handleSuccess} />);
  }

  return renderLayout(
    <PasswordMainContainer
      decryptedPasswords={decryptedPasswords}
      onLogout={handleLogout}
      onPasswordCreated={handlePasswordCreated}
      onPasswordDeleted={handlePasswordDeleted}
      onPasswordEdited={handlePasswordEdited}
    />
  );
}
