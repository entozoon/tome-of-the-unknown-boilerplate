import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { TomeService } from 'tome-of-the-unknown';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public articles: any;
  searchQuery: string;

  constructor(
    private tomeOfTheUnknown: TomeService,
    private route: ActivatedRoute
  ) {
    this.tomeOfTheUnknown.getArticles().then(articles => {
      this.articles = articles;
      console.log('Site: ' + this.articles.length + ' articles received');
    });
  }

  search() {
    // No need to pass the query as a parameter, it's already two-way bound to this.searchQuery
    console.log('Searching: ' + this.searchQuery);

    // Get a filtered array of articles
    this.tomeOfTheUnknown.search(this.searchQuery).then(articles => {
      this.articles = articles;
    });
  }
}
