import { Component, OnInit } from '@angular/core';
// import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article.detail.component.html',
  styleUrls: ['./article.detail.component.scss']
  // Don't include ArticleService as a provider or it creates a new instance!
})
export class ArticleDetailComponent implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute) {
    console.log('article detail constructor.');
  }

  ngOnInit() {
    console.log('article detail ngoninit.');
    this.article = {
      title: 'test',
      date: 'test',
      content: 'test'
    };
  }

  // constructor(
  //   private route: ActivatedRoute,
  //   private articleService: ArticleService
  // ) {}

  // ngOnInit() {
  //   // Get the parameter ID from URL
  //   const sub = this.route.params.subscribe(params => {
  //     // Get the article using that ID
  //     this.articleService.getArticleById(params.id).then(article => {
  //       // Save the article to this component here, for use in the template
  //       this.article = article;
  //     });
  //   });
  // }
}
