import { useRecoilCallback, useRecoilValue } from 'recoil';

import uniqid from 'uniqid';

import { allPasswordsState, isEditingState, passwordsState, selectedPasswordIdState } from 'stores/PasswordStore';

import type { Password } from 'models';

function createNewPassword(): Password {
  const id = uniqid();

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
  const password = createNewPassword();

  const isEditing = useRecoilValue(isEditingState);
  const addPassword = useRecoilCallback(
    ({ set }) =>
      () => {
        set(allPasswordsState, passwords => [...passwords, password]);
        set(passwordsState(password.id), password);
        set(isEditingState, true);
        set(selectedPasswordIdState, password.id);
      },
    []
  );

  return { addPassword, isEditing, id: password.id };
};
