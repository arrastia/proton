import type { IUrl } from '../Url';

export interface Password {
  createdAt: number;
  description?: string;
  id: string;
  isVulnerable?: boolean;
  lastModifiedAt: number;
  name: string;
  thumbnail?: string;
  urls: IUrl[];
  username: string;
  value: string;
}

export class Password {
  constructor({ createdAt, description, id, isVulnerable, lastModifiedAt, name, thumbnail, urls, username, value }: Password) {
    this.createdAt = createdAt;
    this.description = description;
    this.id = id;
    this.isVulnerable = isVulnerable;
    this.lastModifiedAt = lastModifiedAt;
    this.name = name;
    this.thumbnail = thumbnail;
    this.urls = urls;
    this.username = username;
    this.value = value;
  }
}
