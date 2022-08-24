export const base64StringToUint8Array = (string: string) =>
  new Uint8Array(
    atob(string)
      .split('')
      .map(character => character.charCodeAt(0))
  );
