import { useId } from 'react';
import { useRecoilCallback } from 'recoil';

import { allPasswordsState, selectedPasswordIdState } from 'stores/PasswordStore';
import { passwordStore } from 'stores/PasswordElementState';

export const usePasswords = () => {
  // const id = useId();

  const addPassword = useRecoilCallback(({ set, snapshot }) => async (id: string) => {
    const password = await snapshot.getPromise(passwordStore(id));

    set(allPasswordsState, allPasswords => [...allPasswords, password]);
    set(selectedPasswordIdState, id);
  });

  return { addPassword };
};
