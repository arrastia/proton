import type { Password } from 'models';
import type React from 'react';
import { useRecoilState } from 'recoil';
import { passwordsState } from 'stores/PasswordStore';

type Props = { id: string; parameter: keyof Password };

export const useUpdateField = ({ id, parameter }: Props) => {
  const [password, setPassword] = useRecoilState(passwordsState(id));

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) => setPassword(prev => ({ ...prev, description: value }));

  return { field: password[parameter], handleChange };
};
