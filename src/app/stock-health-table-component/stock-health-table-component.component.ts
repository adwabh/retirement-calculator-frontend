import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { StockDataRequest, SrockPortfolioApiRequestService, StockData, PortfolioStats, ProfileData } from '../services/stock-portfolio-api-request.service';

@Component({
  selector: 'app-stockhealth-table',
  templateUrl: './stock-health-table-component.component.html',
  styleUrls: ['./stock-health-table-component.component.scss']
})
export class StockHealthTableComponentComponent implements OnInit , OnDestroy{
  private subscription: Subscription | undefined;
  request = new StockDataRequest("12344")
  stocks?: StockData[];
  wishlist?: StockData[];
  error: boolean = false;

  constructor(private stockService: SrockPortfolioApiRequestService) { }
  ngOnDestroy(): void {
      this.subscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.subscription = this.stockService.getStockData(this.request).subscribe(
        (val)=> {
          this.stocks = val.data.portfolio.equity
          this.wishlist = val.data.wishlist
        },
        (error) => {
          this.error = true
        }
      )
  }

  onCloseError() {
    this.error = false
  }
}
