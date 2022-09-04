import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import * as storage from 'storage';

import { CRYPTO_KEY_STORAGE_KEY } from 'configuration/constants/storage';
import { MAIN_PASSWORD_VALIDATION } from 'configuration/constants/mainPassword';
import { routes } from 'configuration/routes';

import { toasting } from 'components/Toast/toasting';

import { tokenState } from 'stores/UserStore';

import { arrayBufferToBase64, getDerivation } from 'utils/crypto';

import { wait } from 'helpers';

import type { Location } from 'react-router-dom';

interface LocationFrom extends Location {
  state: { pathname: string };
}

const notify = () => toasting.error('Wrong password, try again.');

export const useAuth = () => {
  const setToken = useSetRecoilState(tokenState);

  const [loadingStatus, setLoadingStatus] = useState<'idle' | 'pending' | 'success' | 'failed'>('idle');

  const navigate = useNavigate();
  const { state } = useLocation() as LocationFrom;

  useEffect(() => {
    const rawCryptoKey = storage.getItem<string>(CRYPTO_KEY_STORAGE_KEY);

    setToken(rawCryptoKey);
  }, [setToken]);

  const handleLogin = async (password: string) => {
    setLoadingStatus('pending');
    await wait(5000);

    const derivation = await getDerivation(password);
    const rawPassword = arrayBufferToBase64(derivation);

    if (rawPassword === MAIN_PASSWORD_VALIDATION) {
      setToken(rawPassword);
      setLoadingStatus('success');
      navigate(state?.pathname || routes.DASHBOARD, { replace: true });

      storage.setItem(CRYPTO_KEY_STORAGE_KEY, arrayBufferToBase64(derivation));
    } else {
      notify();
      setLoadingStatus('failed');
    }
  };

  const handleLogout = () => {
    setToken(null);
    storage.removeItem(CRYPTO_KEY_STORAGE_KEY);
  };

  return { handleLogin, handleLogout, loadingStatus };
};
