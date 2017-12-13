import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // for (ngModel)

import { TomeModule } from 'tome-of-the-unknown';
import { TomeService } from 'tome-of-the-unknown';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, TomeModule],
  providers: [TomeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
