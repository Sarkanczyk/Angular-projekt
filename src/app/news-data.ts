export class NewsData {
  public id: number;
  public title: string;
  public image: string;
  public content: string;
  public thumbs: number;

  constructor(
    id: number,
    title: string,
    image: string,
    content: string,
    thumbs: number
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.content = content;
    this.thumbs = thumbs;
  }
}
