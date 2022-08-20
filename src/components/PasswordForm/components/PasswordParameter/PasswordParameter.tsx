import Labelled from 'atoms/Labelled';
import TextArea from 'atoms/TextArea';
import { useUpdateField } from 'components/PasswordForm/hooks/useUpdateField';
import type { FormState } from 'components/PasswordForm/reducers/formReducer';
import type { Password } from 'models';
import { useRecoilState } from 'recoil';

import { passwordsState } from 'stores/PasswordStore';

type Props = {
  parameter: keyof Password;
  id: string;
};

export const PasswordParameter = ({ parameter, id }: Props) => {
  const { field, handleChange } = useUpdateField({ id, parameter });

  return (
    <Labelled label={parameter}>
      <TextArea name={parameter} onChange={handleChange} value={field as string} />
    </Labelled>
  );
};
