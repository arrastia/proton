import type { IUrl } from 'models/Url';

export interface Password {
  createdAt: number;
  description?: string;
  id: string;
  lastModifiedAt?: number;
  name: string;
  url: IUrl[];
  username: string;
  value: string;
}
