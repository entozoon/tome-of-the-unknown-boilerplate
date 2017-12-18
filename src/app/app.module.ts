import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { FormsModule } from '@angular/forms'; // for (ngModel)

import { TomeModule } from 'tome-of-the-unknown';
import { TomeService } from 'tome-of-the-unknown';
// Hopefully remove for the sake of tome
import { ArticleDetailComponent } from './ArticleDetail/article.detail.component';

@NgModule({
  declarations: [AppComponent, ArticleDetailComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, TomeModule],
  providers: [TomeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
