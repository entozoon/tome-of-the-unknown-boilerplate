import { Component } from '@angular/core';
import { TomeOfTheUnknown } from 'tome-of-the-unknown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TomeOfTheUnknown]
})
export class AppComponent {
  constructor(private tomeOfTheUnknown: TomeOfTheUnknown) {}
}
