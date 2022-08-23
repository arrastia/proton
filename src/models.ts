import type { IUrl } from 'models/Url';

export interface Password {
  createdAt: number;
  description?: string;
  id: string;
  isVulnerable?: boolean;
  lastModifiedAt: number;
  name: string;
  thumbnail?: string;
  url: IUrl[];
  username: string;
  value: string;
}
