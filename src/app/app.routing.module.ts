import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ArticleListComponent } from './article-list/article-list.component';
import { AppComponent } from './app.component';
import { ArticleDetailComponent } from './ArticleDetail/article.detail.component';
// import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // The list of articles is the home page
  { path: 'article/:id', component: ArticleDetailComponent }
  // The colon in the path indicates that :id is a placeholder for a specific article id when navigating to the article
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
