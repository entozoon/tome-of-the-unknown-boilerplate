import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TomeModule } from 'tome-of-the-unknown';
import { TomeService } from 'tome-of-the-unknown';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TomeModule],
  providers: [TomeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
