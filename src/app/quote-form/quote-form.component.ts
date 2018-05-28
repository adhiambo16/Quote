import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
// tslint:disable-next-line:semicolon
})

 export class QuoteFormComponent implements OnInit {
 newQuote = new Quote(0, '',  '', new Date());   @Output() savequote = new EventEmitter<Quote>();

  addquote() {
     this.savequote.emit(this.newQuote);
   }
  constructor() { }

   ngOnInit() {
   }

}
