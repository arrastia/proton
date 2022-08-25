import { atomFamily } from 'recoil';

import type { Url } from 'models/Url';

export const urlsState = atomFamily<Url[], string>({
  key: 'urlsState',
  default: []
});
