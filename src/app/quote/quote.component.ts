// import { Component, OnInit } from '@angular/core';
// import { Quote } from '../quote';

// @Component({
//   selector: 'app-quote',
//   templateUrl: './quote.component.html',
//   styleUrls: ['./quote.component.css']
// })
// export class QuoteComponent implements OnInit {
//    quotes =   [
//   // tslint:disable-next-line:max-line-length
//   new Quote(1, 'Mother-daughter quotes from celebrity families', 'role model and sounding board all rolled into one ', new Date(2018, 3, 14) ),
//   new Quote (2, 'Beautiful mother,s day', 'give mothers due respect', new Date(2018, 6, 9) ) ,
//   new Quote(3, 'Graduation quotes', 'celebrating students past accomplishments and their future ones', new Date(2018, 1, 12) ),
//   // tslint:disable-next-line:max-line-length
//   new Quote(4, 'Mothers open up about parenting', 'every parent faces the same joys and challenges that come with kids', new Date(2018, 0, 18) )
//  ];

//   addquote(quote: Quote) {
//     this.quotes.push(quote);
//   }
//  deleteQuote(isDelete, index) {
//    if (isDelete) {
//   const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);
//   }
//   if (isDelete) {
//       this.quotes.splice(index, 1);
//     }
//   }
//   toogleDetails(index) {
//     this.quotes[index].showDescription = !this.quotes[index].showDescription;
//   }
//   upVote(i) {
//   // tslint:disable-next-line:no-trailing-whitespace
  
//    this.quotes[i].upvotes += 1;

//   }
//   downVote(i) {
// // tslint:disable-next-line:no-unused-expression
// this.quotes[i].downvotes -= 1;
//   }



//   constructor() {}

//   ngOnInit() {
//   }

}
