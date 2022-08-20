import classes from './Login.module.css';

import Button from 'atoms/Button';
import Input from 'atoms/Input';

import { useAuth } from 'hooks/useAuth/useAuth';

export const Login = () => {
  const { handleLogin } = useAuth();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const password = formData.get('password') as string;

    await handleLogin(password);
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <h1>Enter your master password</h1>
      <label htmlFor="password-input">Password</label>
      <Input id="password-input" name="password" placeholder="***********" type="password" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

// import { useState } from 'react';
// import { useSetRecoilState } from 'recoil';

// import classes from './Login.module.css';

// import { CRYPTO_KEY_STORAGE_KEY, encryptedValidation, PASSWORDS_STORAGE_KEY } from '../../constants';

// import Button from 'atoms/Button';
// import Input from 'atoms/Input';
// import Layout from 'components/Layout';

// import { tokenState } from 'stores/UserStore';

// import { wait } from 'helpers';

// import * as storage from 'storage';

// import { arrayBufferToBase64, decrypt, encrypt, getDerivation, getKey } from 'utils/crypto';

// import type { ChangeEvent, FormEvent, ReactNode } from 'react';

// type LoadingStatus = 'idle' | 'pending' | 'success' | 'failed';

// export const Login = () => {
//   const setToken = useSetRecoilState(tokenState);

//   const [input, setInput] = useState('');
//   const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>('idle');

//   const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setInput(value);

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();

//     if (loadingStatus === 'pending') return;

//     const validate = async () => {
//       const derivation = await getDerivation(input);
//       const key = await getKey(derivation);

//       await wait(500);
//       // await decrypt(key, encryptedValidation);

//       handleSuccess(key);
//       storage.setItem(CRYPTO_KEY_STORAGE_KEY, arrayBufferToBase64(derivation));
//     };

//     setLoadingStatus('success');
//     validate().catch(() => setLoadingStatus('failed'));
//   };

//   const handleSuccess = (newKey: CryptoKey) => {
//     const run = async () => {
//       try {
//         await hydratePasswords(newKey);
//         setLoadingStatus('success');
//       } catch (error) {
//         return;
//       }
//     };

//     setLoadingStatus('pending');
//     run().catch(() => setLoadingStatus('failed'));
//   };

//   const hydratePasswords = async (newKey: CryptoKey) => {
//     // setKey(newKey);
//     setToken(newKey);

//     await wait(500);
//     const encryptedPasswords = JSON.parse(storage.getItem(PASSWORDS_STORAGE_KEY));
//     // const encryptedPasswordsSTConst = JSON.parse(encryptedPasswordsST);

//     if (!encryptedPasswords) {
//       return;
//     }

//     // const decryptedPasswords = JSON.parse(await decrypt(newKey, encryptedPasswords));
//     // setDecryptedPasswords(decryptedPasswords);
//   };

//   const test = async () => {
//     const derivation = await getDerivation(input);
//     const key = await getKey(derivation);

//     await wait(500);

//     const encryptedText = await encrypt(key, 'hola');
//     console.log('encryptedText :>> ', encryptedText);
//     // const decryptedText = await decrypt(key, encryptedText);

//     // console.log('decryptedText', decryptedText);
//   };

//   return (
//     // <div className={classes.container}>
//     <form className={classes.form} onSubmit={handleSubmit}>
//       <h1>Enter your master password</h1>
//       <label htmlFor="password-input">Password</label>
//       <Input id="password-input" onChange={handleChange} placeholder="***********" type="password" value={input} />
//       <Button disabled={loadingStatus === 'pending'} onClick={test}>
//         Submit
//       </Button>
//     </form>
//     // </div>
//   );
// };
