import { atomFamily } from 'recoil';

export const titleState = atomFamily({
  key: 'titleState',
  default: ''
});

export const passwordState = atomFamily({
  key: 'passwordState',
  default: ''
});

export const usernameState = atomFamily({
  key: 'usernameState',
  default: ''
});

export const notesState = atomFamily({
  key: 'notesState',
  default: ''
});

export const tagsState = atomFamily({
  key: 'tagsState',
  default: []
});
