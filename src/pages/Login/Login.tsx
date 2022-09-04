import { Fragment } from 'react';
import { Monkey } from 'react-animated-stickers';

import { Styles } from './Login.styles';

import { Button } from 'atoms/Button';
import { InputPassword } from 'components/InputPassword';
import { ProtonProducts } from 'components/ProtonProducts';

import { useAuth } from 'hooks/useAuth/useAuth';
import { useLocale } from 'hooks/useLocale';

import type { FormEvent } from 'react';

export const Login = () => {
  const { handleLogin, loadingStatus } = useAuth();
  const { messages } = useLocale<'LOGIN'>({ page: 'LOGIN' });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const password = formData.get('password') as string;

    await handleLogin(password);
  };

  return (
    <Fragment>
      <Styles.Container>
        <Monkey />

        <Styles.Form onSubmit={onSubmit}>
          <h1>{messages['enterPassword']}</h1>
          <label htmlFor="password-input">{messages['password']}</label>
          <InputPassword id="password-input" name="password" placeholder="***********" type="password" />
          <Button disabled={loadingStatus === 'pending'} isLoading={loadingStatus === 'pending'} type="submit">
            {messages['signIn']}
          </Button>
        </Styles.Form>
      </Styles.Container>
      <ProtonProducts />
    </Fragment>
  );
};
