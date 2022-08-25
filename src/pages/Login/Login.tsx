import { Monkey } from 'react-animated-stickers';

import { Styles } from './Login.styles';

import { Button } from 'atoms/Button/Button';
import { InputPassword } from 'components/InputPassword';

import { useAuth } from 'hooks/useAuth/useAuth';

import { FormEvent, Fragment } from 'react';
import { ProtonProducts } from 'components/ProtonProducts';

export const Login = () => {
  const { handleLogin, loadingStatus } = useAuth();

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
          <h1>Enter your master password</h1>
          <label htmlFor="password-input">Password</label>
          <InputPassword id="password-input" name="password" placeholder="***********" type="password" />
          <Button disabled={loadingStatus === 'pending'} type="submit">
            {loadingStatus === 'pending' ? 'loading' : 'submit'}
          </Button>
        </Styles.Form>
      </Styles.Container>
      <ProtonProducts />
    </Fragment>
  );
};
