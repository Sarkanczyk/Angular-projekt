import { Injectable, EventEmitter } from "@angular/core";
import { NewsData } from "./news-data";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  public onChange = new EventEmitter();

  private news: NewsData[] = [
    new NewsData(
      1,
      "Błaszczak: Pierwsze polskie F-35 w 2024 roku. Umowa w przyszłym tygodniu",
      "https://www.defence24.pl/cache/img/840_472_matched__q4iac3_F35makieta.jpeg",
      "Szef MON Mariusz Błaszczak powiedział, że pierwsze myśliwce F-35, planowane do zamówienia przez Polskę, będą „gotowe” w 2024 roku. Potwierdził też, że planuje się podpisanie stosownej umowy dostaw w przyszłym tygodniu.",
      0
    ),
    new NewsData(
      2,
      "Gen. Różanski doradcą Szymona Hołowni",
      "https://defence24.pl/cache/img/840_472_matched__q4ezbx_Rozanski15.jpg",
      "Generał Mirosław Różański będzie koordynował prace mojego zespołu ds. bezpieczeństwa narodowego i zwierzchnictwa nad Siłami Zbrojnymi - poinformował w poniedziałek Szymon Hołownia, który zamierza wystartować w wyborach prezydenckich. Panie generale, jestem dumny, że mogę z panem pracować - dodał.",
      0
    ),
    new NewsData(
      3,
      "Rosyjskie śmigłowce wczesnego ostrzegania na Krymie. Rakietowe zagrożenie dla Morza Czarnego",
      "https://www.defence24.pl/cache/img/840_472_matched__q4ikh8_Ka31srabotayushhej.jpeg",
      "Do stacjonującej na Krymie jednostki lotnictwa rosyjskiej Floty Czarnomorskiej trafił śmigłowiec wczesnego ostrzegania Ka-31R. Zainstalowany na jego pokładzie radar może być wykorzystywany do zwiększenia skuteczności i zasięgu ognia rozlokowanych na półwyspie pocisków przeciwokrętowych. Maszyna może naprowadzać na jednostki przeciwnika pociski systemu 3M14 Kalibr poruszające się z prędkością poddźwiękową, naddźwiękowe 3M55 (P-800) Onyks oraz hipersoniczne 3M22 Cyrkon.",
      0
    ),
    new NewsData(
      4,
      "Świat zwiększa budżety obronne. Rosja i Chiny zbroją się „taniej” ",
      "https://www.defence24.pl/cache/img/840_472_matched__q4khzg_T80URosja.jpg",
      "Światowe wydatki obronne w 2020 roku wzrosną o 3-4 proc. i osiągną poziom 1,9 biliona dolarów. To przekłada się na zwiększenie zamówień dla firm zbrojeniowych – wynika z raportu Deloitte. Choć największym budżetem dysponują niezmiennie Stany Zjednoczone, to swoje wydatki zwiększają też inne państwa, w tym Rosja i Chiny. Paradoksalnie, choć dysponują one mniejszym budżetem, to mogą one budować zdolności bojowe dużo niższym kosztem, i tym samym zagrażać USA i ich sojusznikom.",
      0
    )
  ];

  public getNewsList(): NewsData[] {
    return this.news.slice();
  }

  public addNews(
    id: number,
    title: string,
    image: string,
    content: string,
    thumbs: number
  ) {
    this.news.push(new NewsData(id, title, image, content, thumbs));
    this.onChange.emit();
  }

  public removeNews(id: number) {
    const index: number = this.newsId(id);
    this.news.splice(index, 1);
    this.onChange.emit();
  }

  public refresh() {
    this.onChange.emit();
  }

  public newsId(id: number): number {
    const index = this.news.findIndex(e => {
      return e.id === id;
    });
    return index;
  }

  public thumbUp(id: number) {
    const index: number = this.newsId(id);
    this.news[index].thumbs++;
    this.onChange.emit();
  }

  public thumbDown(id: number) {
    const index: number = this.newsId(id);
    this.news[index].thumbs--;
    this.onChange.emit();
  }
}
