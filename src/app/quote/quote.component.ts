import { Component, OnInit } from '@angular/core';
import{Quote}from'../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    Quote=[
      new Quote(1,'haba na haba hujaza kibaba','wahenga','Daniel'),
    ]
  constructor() { }

  ngOnInit() {
  }

}
