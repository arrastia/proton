const iv = window.crypto.getRandomValues(new Uint8Array(12));

function getMessageEncoding(message: string) {
  const enc = new TextEncoder();

  return enc.encode(message);
}

export async function encryptMessage(key: CryptoKey, message: string) {
  // const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const encoded = getMessageEncoding(message);

  const result = await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoded);

  return result;
}

export function decryptMessage(key: CryptoKey, cipherText: ArrayBuffer) {
  // const iv = window.crypto.getRandomValues(new Uint8Array(12));
  return window.crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, cipherText);
}
