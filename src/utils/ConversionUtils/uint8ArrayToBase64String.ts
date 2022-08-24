export const uint8ArrayToBase64String = (array: Uint8Array) => btoa(String.fromCharCode(...array));
