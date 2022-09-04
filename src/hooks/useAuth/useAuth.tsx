import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import * as storage from 'storage';

import { CRYPTO_KEY_STORAGE_KEY, MAIN_PASSWORD_VALIDATION } from 'configuration/constants';
import { routes } from 'configuration/routes';

import { useLocale } from 'hooks/useLocale';
import { useNotify } from 'hooks/useNotify';

import { tokenState } from 'stores/UserStore';

import { arrayBufferToBase64, getDerivation } from 'utils/crypto';

import { wait } from 'helpers';

import type { LoadingStatus, LocationFrom } from './@types/useAuth.types';

export const useAuth = () => {
  const setToken = useSetRecoilState(tokenState);

  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location as LocationFrom;

  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>('idle');

  const { error } = useNotify();
  const { messages } = useLocale<'LOGIN'>({ page: 'LOGIN' });

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
      error(messages['wrongPasswordNotification']);
      setLoadingStatus('failed');
    }
  };

  const handleLogout = () => {
    setToken(null);
    storage.removeItem(CRYPTO_KEY_STORAGE_KEY);
  };

  return { handleLogin, handleLogout, loadingStatus };
};
