import { uint8ArrayToBase64String } from './uint8ArrayToBase64String';

export const arrayBufferToBase64 = (buffer: ArrayBuffer) => uint8ArrayToBase64String(new Uint8Array(buffer));
