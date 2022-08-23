import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import './index.css';
import './colors.css';

import { CRYPTO_KEY_STORAGE_KEY, PASSWORDS_STORAGE_KEY } from 'configuration/constants/storage';

import App from './App';
import seed from './seed.json';

import { tokenState } from 'stores/UserStore';

import type { SetRecoilState } from 'recoil';

const passwords = window.localStorage.getItem(PASSWORDS_STORAGE_KEY);

if (passwords === null) {
  window.localStorage.setItem(PASSWORDS_STORAGE_KEY, JSON.stringify(null));
}

function initializeUserSettings({ set }: { set: SetRecoilState }) {
  const savedToken = localStorage.getItem(CRYPTO_KEY_STORAGE_KEY);

  set(tokenState, savedToken);
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RecoilRoot initializeState={initializeUserSettings}>
      <App />
    </RecoilRoot>
  </StrictMode>
);
