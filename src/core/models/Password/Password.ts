import type { IURL } from 'core/models/URL';

export interface Password {
  createdDate: number;
  id: string;
  isVulnerable?: boolean;
  modificationDate: number;
  name: string;
  notes?: string;
  thumbnail?: string;
  url: IURL[];
  username: string;
  value: string;
  verificationCode?: number;
}

export class Password {
  constructor({ createdDate, id, isVulnerable, modificationDate, name, notes, thumbnail, url, username, value, verificationCode }: Password) {
    this.createdDate = createdDate;
    this.id = id;
    this.isVulnerable = isVulnerable;
    this.modificationDate = modificationDate;
    this.name = name;
    this.notes = notes;
    this.thumbnail = thumbnail;
    this.url = url;
    this.username = username;
    this.value = value;
    this.verificationCode = verificationCode;
  }
}
