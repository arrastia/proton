import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import './colors.css';

import App from './App';
import seed from './seed.json';

const passwords = window.localStorage.getItem('passwords');

if (passwords === null) {
  window.localStorage.setItem('passwords', JSON.stringify(seed));
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
