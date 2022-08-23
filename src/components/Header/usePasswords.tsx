import { useRecoilCallback } from 'recoil';

import { allPasswordsState, selectedPasswordIdState } from 'stores/PasswordStore';
import { passwordStore } from 'stores/PasswordElementState';

export const usePasswords = () => {
  const addPassword = useRecoilCallback(
    ({ set, snapshot }) =>
      async (id: string) => {
        const password = await snapshot.getPromise(passwordStore(id));

        set(allPasswordsState, allPasswords => [...allPasswords, password]);
        set(selectedPasswordIdState, id);
      },
    []
  );

  const editPassword = useRecoilCallback(
    ({ set, snapshot }) =>
      async (id: string) => {
        const password = await snapshot.getPromise(passwordStore(id));

        set(allPasswordsState, allPasswords => allPasswords.map(p => (p.id === id ? password : p)));
        set(selectedPasswordIdState, id);
      },
    []
  );

  return { addPassword, editPassword };
};
