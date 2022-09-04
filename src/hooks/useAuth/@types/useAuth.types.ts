import type { Location } from 'react-router-dom';

export type LoadingStatus = 'idle' | 'pending' | 'success' | 'failed';

export interface LocationFrom extends Location {
  state: { pathname: string };
}
