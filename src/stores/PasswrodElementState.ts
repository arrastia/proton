import { atomFamily, selectorFamily } from 'recoil';

export const passwordElementState = atomFamily({
  key: 'passwordElementState',
  default: ''
});
