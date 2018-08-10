import { Component, OnInit, Input } from '@angular/core';
import{Quote}from'../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
     quotes=[
       new Quote(1,'haba na haba hujaza kibaba','wahenga','Daniel'),
     ]
    // Quote=[
    //   new Quote(1,'haba na haba hujaza kibaba','wahenga','Daniel'),
    // ]
public quote: Quote = new Quote(0, '', '','')
    addNewQuote(quote: Quote){
      // this.quote = quote;
      const quoteLength=this.quotes.length;
      quote.id=quoteLength+1;
      this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
