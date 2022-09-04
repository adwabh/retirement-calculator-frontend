import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stockhealth',
  templateUrl: './stock-portfolio.component.html',
  styleUrls: ['./stock-portfolio.component.scss']
})
export class StockPortfolioComponent implements OnInit {

  // stock:StockData =

  constructor(stockService: SrockPortfolioApiRequestService) { }
  stocks = Observable<>
  ngOnInit(): void {
  }

}
