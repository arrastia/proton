export interface URL {
  favicon?: any;
  id: string;
  link: string;
}

export class URL {
  constructor({ favicon, id, link }: URL) {
    this.favicon = favicon;
    this.id = id;
    this.link = link;
  }
}
