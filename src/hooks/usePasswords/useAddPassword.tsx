import { useId } from 'react';
import { useRecoilCallback } from 'recoil';

import { allPasswordsState, passwordsState, selectedPasswordIdState } from 'stores/PasswordStore';

import type { Password } from 'models';

function createNewPassword(id: string): Password {
  return {
    createdAt: Date.now(),
    description: '',
    id: `${id}_${Date.now()}`,
    lastModifiedAt: Date.now(),
    name: '',
    url: [],
    username: '',
    value: ''
  };
}

export const useAddPassword = () => {
  const password = createNewPassword(useId());

  const addPassword = useRecoilCallback(
    ({ set }) =>
      () => {
        set(allPasswordsState, passwords => [...passwords, password]);
        set(passwordsState(password.id), password);
        set(selectedPasswordIdState, password.id);
      },
    []
  );

  return { addPassword, id: password.id };
};
