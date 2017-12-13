import { Component } from '@angular/core';
// import { TomeOfTheUnknown } from 'tome-of-the-unknown';
import { TomeService } from 'tome-of-the-unknown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public articles: any;

  constructor(private tomeOfTheUnknown: TomeService) {
    tomeOfTheUnknown.getArticles().then(articles => {
      this.articles = articles;
      console.log(this.articles);
    });
  }
}
