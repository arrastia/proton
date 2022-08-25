import { arrayBufferToBase64, base64StringToUint8Array } from 'utils/crypto';

const iv = window.crypto.getRandomValues(new Uint8Array(12));
// const iv = new Uint8Array(12);

type EncryptedData = { iv: string; cipher: string };

function getMessageEncoding(message: string) {
  const enc = new TextEncoder();

  return enc.encode(message);
}

export async function encryptMessage(key: CryptoKey, message: string): Promise<{ iv: string; cipher: string }> {
  const encoded = getMessageEncoding(message);

  const result = await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoded);

  return { iv: arrayBufferToBase64(iv), cipher: arrayBufferToBase64(new Uint8Array(result)) };
}

export function decryptMessage(key: CryptoKey, { cipher, iv }: EncryptedData) {
  const decryptedCipher = base64StringToUint8Array(cipher);
  const decryptedIV = base64StringToUint8Array(iv);

  return window.crypto.subtle.decrypt({ name: 'AES-GCM', iv: decryptedIV }, key, decryptedCipher);
}
