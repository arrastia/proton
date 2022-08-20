import { selectorFamily } from 'recoil';

export const passUrlsState = selectorFamily<any[], string>({
  key: 'passUrlsState',
  get:
    (id: string) =>
    ({ get }) =>
      []
});
