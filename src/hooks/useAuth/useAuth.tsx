import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { CRYPTO_KEY_STORAGE_KEY } from 'configuration/constants/storage';
import { routes } from 'configuration/routes';

import { tokenState } from 'stores/UserStore';

import * as storage from 'storage';

import { arrayBufferToBase64, decrypt, getDerivation, getKey } from 'utils/crypto';

import { wait } from 'helpers';

import type { Location } from 'react-router-dom';

interface LocationFrom extends Location {
  state: { pathname: string };
}

export const useAuth = () => {
  const setToken = useSetRecoilState(tokenState);

  const navigate = useNavigate();
  const { state } = useLocation() as LocationFrom;

  useEffect(() => {
    const rawCryptoKey = storage.getItem<string>(CRYPTO_KEY_STORAGE_KEY);

    setToken(rawCryptoKey);
  }, [setToken]);

  const handleLogin = async (password: string) => {
    await wait(500);

    const derivation = await getDerivation(password);
    const rawPassword = arrayBufferToBase64(derivation);

    if (rawPassword === 'VJrupYy4825atE1ycOLRqOjFVnQKNAzRTNGMaPqjc+A=') {
      setToken(rawPassword);
      navigate(state?.pathname || routes.HOME, { replace: true });
      storage.setItem(CRYPTO_KEY_STORAGE_KEY, arrayBufferToBase64(derivation));
    }
  };

  const handleLogout = () => {
    setToken(null);
    storage.removeItem(CRYPTO_KEY_STORAGE_KEY);
  };

  return { handleLogin, handleLogout };
};
