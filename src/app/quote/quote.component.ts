import { Component, OnInit, Input } from '@angular/core';
import{Quote}from'../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
     quotes=[
       // new Quote(1,'haba na haba hujaza kibaba','wahenga','Daniel',new Date(2018,7,10)),
     ]
    // Quote=[
    //   new Quote(1,'haba na haba hujaza kibaba','wahenga','Daniel'),
    // ]

    toogleDetails(index){
      this.quotes[index].showAuthor = !this.quotes[index].showAuthor
    }

public quote: Quote = new Quote(0, '', '','',new Date(),0,0)
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
