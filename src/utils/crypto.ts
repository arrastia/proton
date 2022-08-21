// eslint-disable-next-line
const IV = 16;
const ALGORITHM = 'AES-GCM';

export function uint8ArrayToBase64String(array: Uint8Array) {
  // @ts-ignore
  return btoa(String.fromCharCode(...array));
}

export function arrayBufferToBase64(buffer: ArrayBuffer) {
  return uint8ArrayToBase64String(new Uint8Array(buffer));
}

export function base64StringToUint8Array(string: string) {
  return new Uint8Array(
    atob(string)
      .split('')
      .map(c => {
        return c.charCodeAt(0);
      })
  );
}

const rawSalt = new Uint8Array([105, 51, 114, 88, 66, 177, 134, 177, 111, 198, 93, 241, 250, 203, 226, 191]);

export async function getDerivation(password: string, iterations = 339616) {
  const textEncoder = new TextEncoder();
  const passwordBuffer = textEncoder.encode(password);

  const importedKey = await crypto.subtle.importKey('raw', passwordBuffer, 'PBKDF2', false, ['deriveBits']);

  return crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      hash: 'SHA-256',
      salt: rawSalt,
      iterations
    },
    importedKey,
    256
  );
}

export async function encrypt(key: CryptoKey, message: string) {
  // const { privateKey, publicKey } = await keyPair();

  const encryptedText: BufferSource = await window.crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: new Int32Array([IV]).buffer
    },
    key,
    base64StringToUint8Array(message)
  );

  // return {
  //   iv: arrayBufferToBase64(new Int32Array([IV]).buffer),
  //   cipher: arrayBufferToBase64(encryptedText)
  // };

  return encryptedText;
}

export async function decrypt(key: CryptoKey, encryptedText: BufferSource) {
  // const { privateKey, publicKey } = await keyPair();
  // return cipher;
  const decryptedText = await window.crypto.subtle.decrypt(
    {
      name: ALGORITHM,
      iv: new Int32Array([IV]).buffer
    },
    key,
    encryptedText
  );

  return decryptedText;
}

export async function getKey(rawKey: ArrayBuffer) {
  return window.crypto.subtle.importKey('raw', rawKey, ALGORITHM, false, ['encrypt', 'decrypt']);
}

export const keyPair = async () => {
  const test = await window.crypto.subtle.generateKey(
    {
      hash: ALGORITHM,
      modulusLength: 256,
      name: ALGORITHM,
      publicExponent: new Uint8Array([1, 0, 1])
    },
    // ALGORITHM,
    true,
    ['encrypt', 'decrypt']
  );

  return test;
};

// const ivv = crypto.getRandomValues(new Uint8Array(16));
// const alg: any = { name: 'AES-GCM', iv: ivv };

// crypto.subtle.encrypt(alg, key, data).then(function (ciphertext) {
//   console.log(ciphertext);
// });
