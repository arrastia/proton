export interface Url {
  favicon?: any;
  id: string;
  link: string;
}

export class Url {
  constructor({ favicon, id, link }: Url) {
    this.favicon = favicon;
    this.id = id;
    this.link = link;
  }
}
