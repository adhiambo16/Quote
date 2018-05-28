import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes =   [
    // tslint:disable-next-line:max-line-length
    new Quote(1, 'Mother-daughter quotes from celebrity families', 'role model and sounding board all rolled into one ', new Date(2018, 6, 9)),
    new Quote (2, 'Beautiful mother,s day', 'give mothers due respect', new Date(2018 , 6, 9) ) ,
    new Quote(3, 'Graduation quotes', 'celebrating students past accomplishments and their future ones', new Date(2018, 6, 9),  ),
    // tslint:disable-next-line:max-line-length
    new Quote(4, 'Mothers open up about parenting', 'every parent faces the same joys and challenges that come with kids', new Date(2018, 6, 9))
   ];
}

  // constructor(); {}




