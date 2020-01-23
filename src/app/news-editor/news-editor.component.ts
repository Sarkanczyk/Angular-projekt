import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news-editor",
  templateUrl: "./news-editor.component.html",
  styleUrls: ["./news-editor.component.css"]
})
export class NewsEditorComponent implements OnInit {
  title: string;
  image: string;
  content: string;
  thumbs: number;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.title = "";
    this.image = "";
    this.content = "";
    this.thumbs = 0;
  }

  addNews() {
    const id: number = Date.now();
    this.newsService.addNews(id, this.title, this.image, this.content, 0);
    this.title = "";
    this.image = "";
    this.content = "";
    this.thumbs = 0;
  }
}
