import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { CRYPTO_KEY_STORAGE_KEY } from 'configuration/constants/storage';
import { MAIN_PASSWORD_VALIDATION } from 'configuration/constants/mainPassword';
import { routes } from 'configuration/routes';

import { toasting } from 'components/Toast/toasting';

import * as storage from 'storage';
import { tokenState } from 'stores/UserStore';

import { arrayBufferToBase64, getDerivation } from 'utils/crypto';

import { wait } from 'helpers';

import type { Location } from 'react-router-dom';

interface LocationFrom extends Location {
  state: { pathname: string };
}
const notify = () => toasting.error('Here is your toast.');

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

    if (rawPassword === MAIN_PASSWORD_VALIDATION) {
      setToken(rawPassword);
      navigate(state?.pathname || routes.HOME, { replace: true });
      storage.setItem(CRYPTO_KEY_STORAGE_KEY, arrayBufferToBase64(derivation));
    } else {
      notify();
    }
  };

  const handleLogout = () => {
    setToken(null);
    storage.removeItem(CRYPTO_KEY_STORAGE_KEY);
  };

  return { handleLogin, handleLogout };
};
